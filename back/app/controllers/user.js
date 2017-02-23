'use strict'

var mongoose = require('mongoose');
var User = mongoose.model('User');

// 登录
exports.login = function *(next) {

  var userName = this.request.body.userName;
  var password = this.request.body.password;

  var list = [];
  try {
    list = yield User.find({
      "userName": userName
    });
  } catch (e) {
    this.body = {
      status: false,
      error: e
    }
    return next;
  }


  if( list.length == 0 ) {
    this.body = {
      status: false,
      error: '您输入的用户名有误'
    }
    return next;
  } else {
    if( list[0].password != password ) {
      this.body = {
        status: false,
        error: '您输入的密码有误！'
      }
      return next;
    }
  }

  this.body = {
    status: true,
  }

}
