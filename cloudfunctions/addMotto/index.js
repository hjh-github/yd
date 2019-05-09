// 新增/修改座右铭
/*
 params == >{
  motto:'xxx' // 座右铭内容
  userInfo：{} // 用户信息 需要openid
  }
*/

const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command


// 云函数入口函数
exports.main = async(event, context) => {
  console.log(event)
  console.log(context)
  // 埋点获取用户信息
  let data = {
    motto: event.value,
    userInfo: event.user
  };
  // 若没传用户信息则不更新
  if (JSON.stringify(event.user) == '{}') {
    data = {
      motto: event.value
    }
  }
  // 给用户新增座右铭
  let ishas = await db.collection('counters').where({
    _openid: event.userInfo.openId
  }).update({
    data
  })
  // 无法修改则抛出异常
  if (ishas.stats.updated == 0) {
    return {
      errcode: 101,
      errmsg: '用户信息有误！',
      data: false
    }
  }
  return {
    event,
    errcode: 0,
    errmsg: 'success',
    data: event.value
  }
}