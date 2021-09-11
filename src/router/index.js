import Vue from 'vue'
import Router from 'vue-router'
import Home from '../moudules/home/views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "dashboard" */ '../moudules/home/views/Home'),
      meta: {title: '系统首页'}
    },
    {
      path: '/githubLogin',
      component: () => import(/* webpackChunkName: "dashboard" */ '../components/HelloWorld'),
      meta: {title: '系统首页'}
    },
  ],
  mode: 'history'
})
