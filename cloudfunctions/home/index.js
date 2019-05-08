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
  // 查用户文章
  try {
    await db.collection('articles').where({
      _openid: event.userInfo.openId
    }).get().then(r => {
      data['articles'] = setFy(r.data);
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
    data,
    errcode: 0,
    errmsg: 'success'
  }
}
// 先重组文章数据为以日期为索引
function setFy(allAct) {
  let articles = [];
  for (let i in allAct) {
    if (!articles.length) {
      articles.unshift({
        date: allAct[i].date,
        ats: [allAct[i]]
      })
    } else {
      let inx = articles.findIndex((e) => {
        return e.date == allAct[i].date
      })
      if (inx == -1) {
        articles.push({
          date: allAct[i].date,
          ats: [allAct[i]]
        })
      } else {
        articles[inx].ats.unshift(allAct[i])
      }
    }

  }
  return articles;
}