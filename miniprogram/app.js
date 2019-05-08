//app.js
const dataJson = require('./utils/json.js')

App({
  onLaunch: function () {
    
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        traceUser: true,
      })
    }

    this.globalData = {
      banner_img:'https://images.kuan1.cn/kuan1/upload/image/20190428/20190428174057_54186.png',
      // theme:'#679a24'
      theme:"#000000",
      dataJson: dataJson,
      barIndex:0
    }
  }
})
