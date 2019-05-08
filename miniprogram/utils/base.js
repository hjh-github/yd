export class base {
  static fetch(callFunction = '', data = {}) {
    return new Promise((resolve, reject) => {
      wx.cloud.callFunction({
        name: callFunction,
        data,
        success: res => {
          // console.log(res.result)
          console.log(`[云函数] [${callFunction}] result: `, res.result)
          if (res.result.errcode != 0){
            console.log(res.result.errmsg)
            return false;
          }
          resolve(res.result)
        },
        fail: err => {
          console.error(`[云函数] [${callFunction}] 调用失败: `, err)
          reject();
        }
      })
    })
  }
}