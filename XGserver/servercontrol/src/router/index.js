import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import homeList from '@/components/home/homeList'
import adList from '@/components/AD/adList'
import addBook from "@/components/home/addBook"

Vue.use(Router)

export default new Router({
  routes: [{
        path: '/',
        redirect: '/home/homelist'
    },{
      path: '/home',
      component: home,
      children: [
        { path: 'homelist', component: homeList },
        { path: 'addBook', component: addBook },
        { path: 'adlist', component: adList },
      ]
    }
  ]
})
