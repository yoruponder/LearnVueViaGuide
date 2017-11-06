import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '_COMP_/HelloWorld'
import Page1 from '_COMP_/Page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/page1',
      component: Page1
    }
  ]
})
