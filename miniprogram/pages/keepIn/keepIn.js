// miniprogram/pages/keepIn/keepIn.js
const app = getApp();
const globalData = app.globalData;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    visible: true,
    image_url: '',
    title: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      theme: globalData.theme
    })
  },
  save() {
    let date = new Date();
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
    //模拟 取到上一个id
    let ids = [];
    for (let i in globalData.dataJson.allAct) {
      ids.push(Number(i))
    }
    let id = ids.sort()[ids.length - 1] + 1;
    let act = {
      id,
      title: this.data.title,
      content: this.data.content,
      date: date.toLocaleDateString().replace(/\//g, '.'),
      time: date.getTime(),
      image_url: this.data.image_url,
      visible: this.data.visible ? 1 : 0
    }
    globalData.dataJson.allAct[id] = act;
    console.log(globalData.dataJson.allAct)
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