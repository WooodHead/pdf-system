'use strict'

var Router = require('koa-router');
var Book = require('../app/controllers/book');
var User = require('../app/controllers/user');
var Img = require('../app/controllers/uploadImg');

module.exports = function() {
  var router = new Router({
    prefix: '/api'
  });

  // 书本
  router.post('/book/getList', Book.getBookList);  // 查询书本
  router.post('/book/addBook', Book.addBook);  // 增加书本
  router.post('/book/removeBook', Book.removeBook);  // 删除书本
  router.post('/book/updateBook', Book.updateBook);  // 修改书本

  // 登录
  router.post('/user/login', User.login);  // 登录

  // 图片
  router.post('/img/upload',Img.uploadImg);  // 上传图片

  return router;
}
