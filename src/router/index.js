import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '_COMP_/HelloWorld'
import Page1 from '_COMP_/Page1'
import Idx from '_PAGE_/idx'

Vue.use(Router)

const AsyncComp = () => ({
  // 需要加载的组件。应当是一个 Promise
  component: import('./MyComp.vue'),
  // // 加载中应当渲染的组件
  // loading: LoadingComp,
  // // 出错时渲染的组件
  // error: ErrorComp,
  // 渲染加载中组件前的等待时间。默认：200ms。
  delay: 200,
  // 最长等待时间。超出此时间则渲染错误组件。默认：Infinity
  timeout: 3000
});

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Idx
    },
    {
      path: '/page1',
      component: ()=>{
        return import(/* webpackChunkName: "page1" */ '_PAGE_/npage1')
      }
    },
    {
      path: '/page2',
      component: () => {
        return import(/* webpackChunkName: "page2" */ '_PAGE_/npage2')
      }
    },
    {
      path: '/page3',
      component: () => {
        return import(/* webpackChunkName: "page3" */ '_PAGE_/npage3')
      }
    }
  ]
})
