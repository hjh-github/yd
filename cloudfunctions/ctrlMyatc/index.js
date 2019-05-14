// index
/*
 params == >{
   userInfo:{}, // 用户信息  需要openid
   id:1 // 文章id
  }
*/
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command;

// 云函数入口函数
exports.main = async(event, context) => {
  let _db = await db.collection('articles').where({
    _id: event.id
  }).get()
  if (_db.data.length == 0) {
    return {
      data: false,
      errcode: 101,
      errmsg: '文章不存在'
    }
  }
  if (_db.data._openid != event.userInfo.openid) {
    return {
      data: false,
      errcode: 101,
      errmsg: '只能修改自己的文章'
    }
  }
  if (event.remove) {
    try {
      await db.collection('articles').where({
        _id: event.id
      }).remove();
    } catch (err) {
      return {
        event,
        data: false,
        errcode: 101,
        errmsg: err
      }
    }

  }
  if (event.visible != -1) {
      await db.collection('articles').where({
      _id: event.id
    }).update({
      data: {
        "visible": event.visible
      }
    })
  }

  return {
    event,
    data: true,
    errcode: 0,
    errmsg: 'success'
  };
}