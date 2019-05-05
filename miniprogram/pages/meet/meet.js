// miniprogram/pages/meet/meet.js
const app = getApp();
const globalData = app.globalData;
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
  onLoad: function(options) {
    wx.showNavigationBarLoading();
    setTimeout(() => {
      this.setData({
        theme: globalData.theme,
        home: globalData.dataJson.home,
        loaded: true,
        init: false
      })
      wx.hideNavigationBarLoading();
    }, 800)

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log(this.getTabBar())
      this.getTabBar().setData({
        selected: 1
      })
    }
    if (!this.data.init) {
      wx.showNavigationBarLoading();
      setTimeout(() => {
        this.setData({
          theme: globalData.theme,
          home: globalData.dataJson.home,
          init: false
        })
        wx.hideNavigationBarLoading();
        wx.vibrateShort();
        // wx.lin.showMessage({
        //   type: 'success',
        //   content: "好的遇见，从不嫌多（刷新成功）"
        // })
      }, 800)
    }

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})