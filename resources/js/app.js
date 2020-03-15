require('./bootstrap')
import Vue from 'vue'
import Router from 'vue-router'
import { routes, routeBeforeMiddlereware } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// アイコン読み込み
library.add(fas, far, fab)
Vue.component('v-fa', FontAwesomeIcon)

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
