import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ReadInfo from '@/components/read/readinfo'
import Read from '@/components/read/read'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Home
    },
    {
      path: '/home/readinfo',
      component: ReadInfo
    },
    {
    	path: '/home/read',
    	component: Read
    }
  ]
})
