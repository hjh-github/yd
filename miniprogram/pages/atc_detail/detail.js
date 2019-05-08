// miniprogram/pages/atc_detail/detail.js
const app = getApp();
const globalData = app.globalData;
const {
  service
} = require('../../utils/service.js')
// 引用了这个  就可以用 async -- await
const regeneratorRuntime = require('../../utils/runtime.js');
Page({
  data: {
    config: {},
    theme: ''
  },
  onLoad: async function(opt) {
    let {data} = await service.getAtcDetail(opt.id)
    this.setData({
      config: data,
      theme: globalData.theme
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})