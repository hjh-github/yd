// 云函数模板
// 部署：在 cloud-functions/login 文件夹右击选择 “上传并部署”

const cloud = require('wx-server-sdk')

// 初始化 cloud
cloud.init()

const db = cloud.database();
const _ = db.command

/**
 * 这个示例将经自动鉴权过的小程序用户 openid 返回给小程序端
 * 
 * event 参数包含小程序端调用传入的 data
 * 
 */
exports.main = async(event, context) => {
  // console.log(event)
  // console.log(context)
  // 获取 WX Context (微信调用上下文)，包括 OPENID、APPID、及 UNIONID（需满足 UNIONID 获取条件）
  const wxContext = cloud.getWXContext()
  
  let ishas = await db.collection('counters').where({
    _openid: wxContext.OPENID
  }).update({
    data: {
      count: _.inc(1),
      update: db.serverDate()
    }

  })
  // 记录用户，并且每个用户只记录一条，如重新进入只累积最后一次
  if (ishas.stats.updated == 0) {
  await db.collection('counters').add({
      data: {
        count: 1,
        _openid: wxContext.OPENID,
        createTime: db.serverDate(),
        update: db.serverDate()
      }

    })
  }
  // 可执行其他自定义逻辑
  // console.log 的内容可以在云开发云函数调用日志查看

  return {
    event,
    errcode: 0,
    errmsg: 'success',
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID
  }
}