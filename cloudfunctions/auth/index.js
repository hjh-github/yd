// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database();
const _ = db.command
// 云函数入口函数
exports.main = async (event, context) => {
 let _db = await db.collection('auth').doc('a108a8a0-2411-4b57-be9a-b86a15b07330').get();

  return {
    event,
    data: _db.data.auth,
    errcode: 0,
    errmsg: 'success'
  }
}