import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '_COMP_/HelloWorld'
import Page1 from '_COMP_/Page1'
import Idx from '_PAGE_/idx'
import Npage1 from '_PAGE_/npage1'
import Npage2 from '_PAGE_/npage2'
import Npage3 from '_PAGE_/npage3'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Idx
    },
    {
      path: '/page1',
      component: Npage1
    },
    {
      path: '/page2',
      component: Npage2
    },
    {
      path: '/page3',
      component: Npage3
    }
  ]
})
