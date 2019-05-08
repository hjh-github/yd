// meets list 
/*
 params == >{
   page:1, // 当前页数
   pageSize:10 // 页面条数
  }
*/
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command

// 云函数入口函数
exports.main = async (event, context) => {
  
  let _db = await db.collection('articles').skip((Number(event.page) - 1) * event.pageSize).limit(event.pageSize).get();

  return {
    event,
    data: _db.data,
    errcode: 0,
    errmsg: 'success'
  };
}