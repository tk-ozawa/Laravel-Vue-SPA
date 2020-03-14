require('./bootstrap')
import Vue from 'vue'
import Router from 'vue-router'
import { routes, routeBeforeMiddlereware } from './router'

Vue.use(Router)

Vue.component('app-component', require('./views/App.vue').default)

let globalData = new Vue({
  data: { $isLogin: false }
})

Vue.mixin({
  computed: {
    $isLogin: {
      get: function () { return globalData.$data.$isLogin },
      set: function (val) { globalData.$data.$isLogin = val }
    }
  }
})

const router = new Router({
  mode: 'history',
  routes
})

// 認証ガード
router.beforeEach(routeBeforeMiddlereware(globalData))

const app = new Vue({
  el: '#app',
  router
})
