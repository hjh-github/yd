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
    theme: '',
    loaded:false,
  },
  onLoad: async function(opt) {
    wx.showNavigationBarLoading();
    let {data} = await service.getAtcDetail(opt.id)
    this.setData({
      config: data,
      theme: globalData.theme,
      loaded:true
    })
    wx.hideNavigationBarLoading();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})