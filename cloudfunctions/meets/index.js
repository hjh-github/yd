// meets list 
/*
 params == >{
   page:1, // 当前页数
   pageSize:10, // 页面条数
   owner:1 //是否是查询当前用户分页
  }
*/
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command

// 云函数入口函数
exports.main = async(event, context) => {
  let _db = [];
  if (!event.owner) {
    // 仅查询开放文章
    _db = await db.collection('articles').where({
      visible: 1
    }).skip((Number(event.page) - 1) * event.pageSize).limit(event.pageSize).get();
    
  } else {
    let whereData = {
      _openid: event.userInfo.openId,
    }
    if (event.search) {
      whereData = {
        _openid: event.userInfo.openId,
        title: db.RegExp({
          regexp: event.search,
          //从搜索栏中获取的value作为规则进行匹配。
          options: 'i',
          //大小写不区分
        })
      }
    }
    // 这里是用的是home的文章分页
    _db = await db.collection('articles').where(whereData).skip((Number(event.page) - 1) * event.pageSize).limit(event.pageSize).get();
  }


  return {
    event,
    data: _db.data,
    errcode: 0,
    errmsg: 'success'
  };
}