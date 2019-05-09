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
exports.main = async (event, context) => {
  let _db = [];
  if (!event.owner){
    _db = await db.collection('articles').skip((Number(event.page) - 1) * event.pageSize).limit(event.pageSize).get();
    // 这里是用的是home的文章分页
  }else{
    _db = await db.collection('articles').where({
      _openid: event.userInfo.openId
    }).skip((Number(event.page) - 1) * event.pageSize).limit(event.pageSize).get();
  }
  

  return {
    event,
    data: _db.data,
    errcode: 0,
    errmsg: 'success'
  };
}