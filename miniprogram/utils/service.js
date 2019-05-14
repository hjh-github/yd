const {
  base
} = require('./base.js')
export class service extends base {
  // auth
  static auth(){
    return this.fetch('auth')
  }
  // home data 
  static home(data) {
    return this.fetch('home',{...data})
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
  // home more || 搜索
  static ownMore(data){
    return this.fetch('meets', {...data,owner:1})
  }
  // 自己的文章 显示隐藏
  static lock(data){
    return this.fetch('ctrlMyatc', data)
  }
  // 删除文章
  static del(data) {
    return this.fetch('ctrlMyatc', { ...data, remove: 1, visible:-1})
  }
  // 新建文章
  static createAtc(data) {
    return this.fetch('creatAtc', { ...data})
  }
}