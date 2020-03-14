/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')
// window.Vue = require('vue')
import Vue from 'vue'
import Router from 'vue-router'
import { routes, routeBeforeMiddlereware } from './router'

Vue.use(Router)

// import VueRouter from 'vue-router'
// import router from './router'
// import store from './store'

// window.state = store.state
// Vue.prototype.$state = { isLogin: false }

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('app-component', require('./views/App.vue').default)

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

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

router.beforeEach(routeBeforeMiddlereware(globalData))

const app = new Vue({
  el: '#app',
  router
})
