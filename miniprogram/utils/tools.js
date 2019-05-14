export class Tools {
  static uploadFile(image_url) {
    return new Promise((resolve, reject) => {
      // 上传图片
      wx.uploadFile({
        url: 'https://***/oss/index.php?controller=index&action=upload_img', // 仅为示例，非真实的接口地址
        filePath: image_url,
        name: 'filename',
        success: function(res) {
          let data = JSON.parse(res.data);
          if (data.errcode == 0) {
            resolve(data.data)
          } else {
            reject(data.errmsg)
          }
        }
      })
    })

  }
  // 格式化日期
  static dateFormate(date, fmt) {
    const o = {
      'M+': date.getMonth() + 1,
      'd+': date.getDate(),
      'h+': date.getHours(),
      'm+': date.getMinutes(),
      's+': date.getSeconds(),
      'q+': Math.floor((date.getMonth() + 3) / 3),
      'S': date.getMilliseconds()
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (let k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    }
    return fmt;
  }
}