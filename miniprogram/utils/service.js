export class service {
  // 存储 
  /*
    pramas => {
      gather:''， // 集合

    }
  */
  static save() {
    new Promise((resolve, reject) => {
      const db = wx.cloud.database()
      db.collection('counters').add({
        data: {
          count: 1
        },
        success: res => {
          console.log(res)
          // 在返回结果中会包含新创建的记录的 _id
          this.setData({
            counterId: res._id,
            count: 1
          })
          wx.showToast({
            title: '新增记录成功',
          })
          console.log('[数据库] [新增记录] 成功，记录 _id: ', res._id)
        },
        fail: err => {
          wx.showToast({
            icon: 'none',
            title: '新增记录失败'
          })
          console.error('[数据库] [新增记录] 失败：', err)
        }
      })
    })
  }
}