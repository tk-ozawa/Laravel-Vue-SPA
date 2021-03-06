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
    // 認証が必要なページで未ログイン
    if (to.matched.some(record => record.meta.requiresAuth) && globalData.$data.$isLogin === false) {
      next({ path: '/login' })
      return; // これが無いと疑似リダイレクト時認証ガードをすり抜けてしまう
    }

    // 任意のページへ遷移
    next()
  }
}
