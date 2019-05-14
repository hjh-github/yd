// miniprogram/pages/home/index.js
const app = getApp();
const globalData = app.globalData;
const {
  auth
} = require('../../utils/login.js')
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
    banner: '',
    theme: '',
    home: {},
    edit: false,
    newMotto: '',
    searchKey: '',
    init: true,
    logged: false,
    moring: false,
    articles: [],
    page: 1,
    auth:false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    let canShow = await service.auth();
    globalData['auth'] = canShow.data;
    // 登录
    let authInfo = await auth.login();
    globalData['openid'] = authInfo.openid;
    this.loadData();
    this.setData({
      auth: canShow.data
    })
    // service.save()

  },
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
    if (!this.data.init) {
      this.loadData();
    }
  },
  async loadData() {
    wx.showNavigationBarLoading();
    let homeData = await service.home({
      search: this.data.searchKey
    });
    let home = JSON.parse(JSON.stringify(homeData.data));
    home.articles = this.setFy(homeData.data.articles);
    this.setData({
      articles: homeData.data.articles,
      banner: globalData.banner_img,
      theme: globalData.theme,
      home: home,
      init: false,
      page: 1
    })
    wx.hideNavigationBarLoading();
  },
  // 先重组文章数据为以日期为索引
  setFy(allAct) {
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
  async searchFy() {
    wx.showNavigationBarLoading();
    let articles = await service.ownMore({
      search: this.data.searchKey,
      page: 1,
      pageSize: 10
    });

    let newArticles = articles.data;
    this.data.home.articles = this.setFy(newArticles);
    this.setData({
      articles: newArticles,
      home: this.data.home
    })

    wx.hideNavigationBarLoading();
    wx.lin.showMessage({
      type: 'success',
      content: '拾忆完毕！'
    })


  },
  // 设置文章显示
  async canShow(e) {
    wx.showNavigationBarLoading();
    let id = e.target.dataset.id;
    let visible = e.target.dataset.visible ? 0 : 1;
    let res = await service.lock({
      id,
      visible
    });
    wx.hideNavigationBarLoading();
    wx.lin.showMessage({
      type: 'success',
      content: visible ? '这是我的私密文章（设为私密）' : "真是一篇值得分享的文章（公开文章）"
    })
    this.loadData();
  },
  // 编辑按钮
  async editMotto(e) {
    // 未修改，则不保存
    if (!this.data.edit) {
      this.data.newMotto = globalData.dataJson.home.motto;
      this.setData({
        edit: !this.data.edit
      })
    } else {
      // 有修改才保存
      if (this.data.newMotto != globalData.dataJson.home.motto) {
        let userInfo = {};
        // 获取用户信息，若本次启动小程序已经获取过则不再获取
        if (!this.logged && e.detail.userInfo) {
          userInfo = e.detail.userInfo
        }
        wx.showNavigationBarLoading()
        // 保存
        let res = await service.motto({
          value: this.data.newMotto,
          user: userInfo
        });
        wx.hideNavigationBarLoading()
        if (res.errcode == 0) {
          wx.lin.showMessage({
            type: 'success',
            content: '这真是一句铭心之语！（修改成功）'
          })

        await this.loadData();
          this.setData({
            logged: true,
            edit: !this.data.edit
          })
        }
      }

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
      success: async(res) => {
        if (res.confirm) {
          wx.showNavigationBarLoading();
          let id = e.target.dataset.id;
          let res = await service.del({
            id
          });
          wx.hideNavigationBarLoading();
          wx.lin.showMessage({
            type: 'success',
            content: "真是一个糟糕的经历！（删除成功）"
          })
          self.loadData();

        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })


  },
  // check id

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
  onReachBottom: async function() {
    this.setData({
      moring: 'loading'
    })
    let page = this.data.page + 1;
    let articles = await service.ownMore({
      search: this.data.searchKey,
      page,
      pageSize: 10
    });
    if (articles.data.length > 0) {
      let newArticles = this.data.articles.concat(articles.data);
      this.data.home.articles = this.setFy(newArticles);
      this.setData({
        articles: newArticles,
        home: this.data.home,
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