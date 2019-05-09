// index
/*
 params == >{
   userInfo:{}, // 用户信息  需要openid
   
  }
*/
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async(event, context) => {
  let data = {};
  const wxContext = cloud.getWXContext()
  // 查座右铭
  try {
    await db.collection('counters').where({
      _openid: event.userInfo.openId
    }).get().then(r => {
      data['motto'] = r.data[0].motto || '';
    })
  } catch (err) {
    console.log(err)
    return {
      data: false,
      errcode: 101,
      errmsg: '用户不存在'
    }
  }
  // 查用户文章 第一页只查询10个
  try {
    await db.collection('articles').where({
      _openid: event.userInfo.openId
    }).skip(0).limit(10).get().then(r => {
      data['articles'] = r.data;
    })
  } catch (err) {
    console.log(err)
    return {
      data: false,
      errcode: 101,
      errmsg: '用户不存在'
    }
  }
  return {
    event,
    data,
    errcode: 0,
    errmsg: 'success'
  }
}
