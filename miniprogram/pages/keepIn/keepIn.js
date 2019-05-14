// miniprogram/pages/keepIn/keepIn.js
const app = getApp();
const globalData = app.globalData;
const {
  Tools
} = require('../../utils/tools.js')
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
    visible: true,
    image_url: '',
    title: '',
    content: '',
    source: '',
    logged: false,
    auth:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(globalData.auth)
    this.setData({
      theme: globalData.theme,
      auth: globalData.auth
    })
  },
  sourceFy(e) {
    this.setData({
      source: e.detail.detail.value
    })
  },
  async save(e) {
    let date = new Date();
    const self = this;
    if (!this.data.title) {
      wx.lin.showToast({
        title: '言档怎可无名',
        icon: 'error',
        iconStyle: 'size: 60'
      })
      return false;
    }
    if (!this.data.image_url) {
      wx.lin.showToast({
        title: '还缺封面图~',
        icon: 'error',
        iconStyle: 'size: 60'
      })
      return false;
    }
    if (!this.data.content) {
      wx.lin.showToast({
        title: '来丰富内容~',
        icon: 'error',
        iconStyle: 'size: 60'
      })
      return false;
    }
    let image_url = await Tools.uploadFile(this.data.image_url);
    let userInfo = {};
    // 获取用户信息，若本次启动小程序已经获取过则不再获取
    if (!this.logged && e.detail.userInfo) {
      userInfo = e.detail.userInfo
    }
    this.setData({
      logged: true
    })
    let act = {
      title: this.data.title,
      content: this.data.content,
      date: Tools.dateFormate(date, 'yyyy.MM.dd'),
      time: date.getTime(),
      image_url: image_url.file_url,
      visible: this.data.visible ? 1 : 0,
      source: this.data.source || userInfo.nickName,
      avatarUrl: userInfo.avatarUrl,
      isOriginal: this.data.source ? 0 : 1,

    }
    let res = await service.createAtc(act);
    console.log(res)
    wx.lin.showToast({
      title: '保存成功',
      icon: 'success',
      iconStyle: 'size: 60',
      success: function() {
        wx.navigateBack({
          delta: 1
        })
      }
    })
  },
  titleFy(e) {
    this.setData({
      title: e.detail.value
    })
  },
  contentFy(e) {
    // console.log(e)
    this.setData({
      content: e.detail.detail.value
    })
  },
  canShow() {
    this.setData({
      visible: !this.data.visible
    })
  },
  chooseImg() {
    let self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        if (res.tempFiles["0"].size > 1000000) {
          wx.lin.showToast({
            title: '你上传的图片太大啦！(<1M)',
            icon: 'error',
            iconStyle: 'size: 60'
          })
        }
        self.setData({
          image_url: tempFilePaths[0]
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})