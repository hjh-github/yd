const {
  base
} = require('./base.js')
export class auth extends base{
  // 登录获取openid
  static login() {
    return this.fetch('login');
  }

}