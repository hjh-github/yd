// 文章详情
/*
 params == >{
  id:1 // 文章id
  }
*/
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command


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
  return {
    event,
    data: _db.data[0],
    errcode: 0,
    errmsg: 'success'
  };
}