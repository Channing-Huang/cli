import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import index from "./../components/index/index.vue"
import cloudBag from "./../components/cloudBag/cloudBag.vue"
import market from "./../components/market/market.vue"
import mine from "./../components/mine/mine.vue"
import test from "./../components/test/test.vue"

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: index,
    },
    {
        path:"/cloudBag",
        component:cloudBag
    },
    {
        path:"/market",
        component:market
    },
    {
        path:"/mine",
        component:mine
    },
    {
      path:"/test",
      component:test
    }
  ]
})
