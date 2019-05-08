// miniprogram/pages/meet/meet.js
const app = getApp();
const globalData = app.globalData;
const {
  service
} = require('../../utils/service.js')
// 引用了这个  就可以用 async -- await
const regeneratorRuntime = require('../../utils/runtime.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loaded: false,
    init: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    this.loadData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log(this.getTabBar())
      this.getTabBar().setData({
        selected: 1
      })
    }
    if (!this.data.init) {
      await this.loadData();
      wx.vibrateShort();
    }

  },
  async loadData(page = 1, pageSize = 10) {
    wx.showNavigationBarLoading();
    let meets = await service.meets({
      page,
      pageSize
    });
    console.log(meets.data)
    this.setData({
      theme: globalData.theme,
      articles: meets.data,
      loaded: true,
      init: false
    })
    wx.hideNavigationBarLoading();
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})