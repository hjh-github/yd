// miniprogram/pages/home/index.js
const app = getApp();
const globalData = app.globalData;

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: '',
    theme: '',
    home: {},
    edit: false,
    newMotto: '',
    searchKey: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    this.setData({
      banner: globalData.banner_img,
      theme: globalData.theme,
      home: globalData.dataJson.home
    })
  },
  ret() {
    return false;
  },
  // 搜索内容
  getSearch(e) {
    this.setData({
      searchKey: e.detail.value
    })
  },
  // 搜索按钮
  searchFy() {
    wx.showNavigationBarLoading();
    let data = JSON.parse(JSON.stringify(globalData.dataJson.home));
    let hasData = [];
    data.articles.forEach((e) => {
      let obj = {
        date: e.date,
        ats: []
      }
      e.ats.forEach((item, inx) => {
        if (item.title.indexOf(this.data.searchKey) != -1) {
          obj.ats.push(item)
        }
      })
      if (obj.ats.length > 0) {
        hasData.push(obj)
      }
    })
    if (this.data.searchKey != '') {
      data.articles = hasData;
    }

    setTimeout(() => {
      this.setData({
        home: data
      })
      wx.hideNavigationBarLoading();
      wx.lin.showMessage({
        type: 'success',
        content: '拾忆完毕！'
      })
    }, 500)

  },
  // 设置文章显示
  canShow(e) {
    const self = this;
    wx.showNavigationBarLoading();
    let id = e.target.dataset.id;
    let date = e.target.dataset.date;
    let data = globalData.dataJson.home.articles;
    let visible = e.target.dataset.visible;
    let inx = data.findIndex(e => {
      return e.date == date
    })
    let todelInx = data[inx].ats.findIndex(e => {
      return e.id == id
    })
    data[inx].ats[todelInx].visible = !visible;
    globalData.dataJson.home.articles = data;
    setTimeout(() => {
      wx.hideNavigationBarLoading();
      self.setData({
        home: globalData.dataJson.home
      })
      wx.lin.showMessage({
        type: 'success',
        content: visible ? '这是我的私密文章（设为私密）' : "真是一篇值得分享的文章（公开文章）"
      })
    }, 300)
  },
  // 编辑按钮
  editMotto() {
    if (!this.data.edit) {
      this.data.newMotto = globalData.dataJson.home.motto;
      this.setData({
        edit: !this.data.edit
      })
    } else {
      if (this.data.newMotto != globalData.dataJson.home.motto) {
        globalData.dataJson.home.motto = this.data.newMotto;
      }
      this.setData({
        edit: !this.data.edit,
        home: globalData.dataJson.home
      })
      wx.lin.showMessage({
        type: 'success',
        content: '这真是一句铭心之语！（修改成功）'
      })
    }

  },
  // 编辑内容
  mottoFy(e) {
    this.setData({
      newMotto: e.detail.value
    })
  },
  // 删除文章
  deleteFy(e) {
    const self = this;
    wx.lin.showDialog({
      type: "confirm",
      showTitle: false,
      content: "继续删除这条很值得记忆的瞬间吗？",
      cancelColor: '#ccc',
      success: (res) => {
        if (res.confirm) {
          wx.showNavigationBarLoading();
          let id = e.target.dataset.id;
          let date = e.target.dataset.date;
          let data = globalData.dataJson.home.articles;
          let inx = data.findIndex(e => {
            return e.date == date
          })
          let todelInx = data[inx].ats.findIndex(e => {
            return e.id == id
          })
          data[inx].ats.splice(todelInx, 1);
          if (!data[inx].ats.length) {
            data.splice(inx, 1)
          }
          globalData.dataJson.home.articles = data;
          setTimeout(() => {
            wx.hideNavigationBarLoading();
            self.setData({
              home: globalData.dataJson.home
            })
          }, 1500)

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })


  },
  // check id
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },
  // 去详情
  toDetaile(e) {
    let id = e.target.dataset.id || e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/atc_detail/detail?id=${id}`,
    })
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
  onShareAppMessage: function(e) {
    if (e.from === 'menu') {
      return {};
    }
    return {
      title: e.target.dataset.title,
      path: `/pages/atc_detail/detail?id=${e.target.dataset.id}`,
      imageUrl: e.target.dataset.image
    };
  }
})