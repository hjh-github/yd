
export class auth  {
  // 登录获取openid
  static login() {
   return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: 'login',
        data: {},
        success: res => {
          // console.log(res.result)
          console.log('[云函数] [login] user openid: ', res.result.openid)
          resolve(res.result)
        },
        fail: err => {
          console.error('[云函数] [login] 调用失败', err)
          reject();
        }
      })
    })
  }
}