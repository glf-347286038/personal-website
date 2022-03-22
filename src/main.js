// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.prototype.$axios = axios

Vue.config.productionTip = false

Vue.use(ElementUI)
// 开启debug模式
Vue.config.debug = true
Vue.prototype.$baseUrl = process.env.baseUrl

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})

//使用钩子函数对路由进行权限跳转
// router.beforeEach((to, from, next) => {
//   console.log('当前路径' + to.path)
//   //标题修改
//   // document.title = `${to.meta.title} | 秒杀商城`;
//   // const token = localStorage.getItem('token');
//   // if(!token && to.path !== '/login'){
//   //   next('/login');
//   // }else{
//   //   next();
//   // }
// });
