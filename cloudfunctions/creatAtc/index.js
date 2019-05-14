// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command;
// 云函数入口函数
exports.main = async(event, context) => {
  try {
    await db.collection('articles').add({
      data: {
        _openid: event.userInfo.openId,
        title: event.title,
        content: event.content,
        visible: event.visible,
        date: event.date,
        time: event.time,
        image_url: event.image_url,
        author: event.source,
        avatarUrl: event.avatarUrl,
        isOriginal: event.isOriginal,
        digest: event.content.substring(0, 150)
      }
    })
    return {
      event,
      data: true,
      errcode: 0,
      errmsg: 'success'
    }
  } catch (err) {
    return {
      event,
      data: false,
      errcode: 0,
      errmsg: err
    }
  }
}