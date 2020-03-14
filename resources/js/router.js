export const routes = [
  {
    path: '*',
    component: require('./views/NotFound').default
  },
  {
    path: '/',
    name: 'home',
    component: require('./views/Home').default
  },
  {
    path: '/about',
    name: 'about',
    component: require('./views/About').default
  },
  {
    path: '/login',
    name: 'login',
    component: require('./views/Login').default
  },
  {
    path: '/user',
    name: 'user',
    component: require('./views/User').default,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:id',
    name: 'user_detail',
    component: require('./views/UserDetail').default,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/:id/edit',
    name: 'user_edit',
    component: require('./views/UserEdit').default,
    meta: { requiresAuth: true }
  },
  {
    path: '/user/create',
    name: 'user_create',
    component: require('./views/UserCreate').default,
    meta: { requiresAuth: true },
  }
]

export const routeBeforeMiddlereware = globalData => {
  return (to, from, next) => {
    // console.log($isLogin)
    // 認証が必要なページで未ログイン
    console.log('beforeach', globalData.$data.$isLogin)

    if (to.matched.some(record => record.meta.requiresAuth)) {
      console.log('to.matched.some', globalData.$data.$isLogin)
      if (globalData.$data.$isLogin === false) {
        // ログインページへ遷移
        next({
          path: '/login',
          // query: { redirect: to.fullPath }
        })
        return;
      }
    }
    // 任意のページへ遷移
    next()
  }
}
