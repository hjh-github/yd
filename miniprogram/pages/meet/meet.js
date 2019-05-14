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
    init: true,
    auth:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: async function(options) {
    this.setData({
      theme: globalData.theme,
      auth: globalData.auth
    })
    this.loadData();
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: async function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
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
    await this.setData({
      theme: globalData.theme,
      articles: meets.data,
      loaded: true,
      init: false,
      page
    })
    wx.hideNavigationBarLoading();
  },
  // 去详情
  toDetaile(e) {
    let id = e.target.dataset.id || e.currentTarget.dataset.id;
    console.log(e)
    wx.navigateTo({
      url: `/pages/atc_detail/detail?id=${id}`,
    })
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: async function() {
    this.setData({
      moring: 'loading'
    })
    let page = this.data.page + 1;
    let articles = await service.ownMore({
      page,
      pageSize: 10
    });
    if (articles.data.length > 0) {
      let newArticles = this.data.articles.concat(articles.data);
      this.setData({
        articles: newArticles,
        moring: '',
        page: page
      })
    }
    if (!articles.data.length) {
      this.setData({
        moring: 'end'
      })
    }
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
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