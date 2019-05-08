const app = getApp();
Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [{
        "pagePath": "/pages/home/index",
        "iconPath": "/images/icon_component.png",
        "selectedIconPath": "/images/icon_component_HL.png"
      },
      {
       "pagePath": "/pages/meet/meet",
        "iconPath": "/images/icon_API.png",
        "selectedIconPath": "/images/icon_API_HL.png"
      }
      
    ]
  },
  attached() {},
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({
        url
      })
      this.setData({
        selected: data.index
      })
    },
    keepin() {
      wx.navigateTo({
        url: '/pages/keepIn/keepIn',
      })
    }
  }
})