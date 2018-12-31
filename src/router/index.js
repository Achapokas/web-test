import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import smb from '@/components/smb'
import all from '@/components/all'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/smb',
      name: 'smb',
      component: smb
    },
    {
      path: '/all',
      name: 'all',
      component: all
    }
  ]
})
