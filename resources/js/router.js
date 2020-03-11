import Router from 'vue-router'

export default new Router({
    mode: 'history',
    routes: [
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
            path: '/user',
            name: 'user',
            component: require('./views/User').default
        },
        {
            path: '/user/:id',
            name: 'user_detail',
            component: require('./views/UserDetail').default
        },
        {
            path: '/user/:id/edit',
            name: 'user_edit',
            component: require('./views/UserEdit').default
        },
        {
            path: '/user/create',
            name: 'user_create',
            component: require('./views/UserCreate').default
        }
    ]
})
