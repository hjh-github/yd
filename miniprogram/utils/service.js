const {
  base
} = require('./base.js')
export class service extends base {
  // home data 
  static home() {
    return this.fetch('home')
  }
  // 新增 || 修改 Motto
  static motto(data) {
    return this.fetch('addMotto', data);
  }
  // 获取文章详情
  static getAtcDetail(id) {
    return this.fetch('atcDetaile', {
      id
    })
  }
  // meets list
  static meets(data){
    return this.fetch('meets', data)
  }
  // home more 
  static ownMore(data){
    return this.fetch('meets', {...data,owner:1})
  }
  // 自己的文章 显示隐藏
  static lock(data){
    return this.fetch('ctrlMyatc', data)
  }
}