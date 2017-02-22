import Vue from 'vue'
import Router from 'vue-router'
import BookInfo from './../bookInfo'
import App from './../App'
import Admin from './../admin'
import Login from './../login'
import AddBook from './../AddBook'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: App
    },
    {
      path: '/book/:id',
      name: 'book',
      component: BookInfo
    },
    {
      path: '/bookEdit/:id',
      name: 'bookEdit',
      component: BookInfo
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    },
    {
      path: '/admin/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/addBook',
      name: 'AddBook',
      component: AddBook
    }
  ]
})
