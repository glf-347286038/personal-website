import Vue from 'vue'
import Router from 'vue-router'
import Index from '../moudules/index/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      component: () => import(/* webpackChunkName: "dashboard" */ '../moudules/index/views/index'),
      meta: {title: '系统首页'}
    },
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "dashboard" */ '../moudules/login/views/Login'),
      meta: {title: '系统首页'}
    },
    {
      path: '/callback',
      component: () => import('../moudules/login/views/Callback'),
      meta: {title: '回调页面'}
    },
  ],
  mode: 'history'
})
