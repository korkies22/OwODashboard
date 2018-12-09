import Vue from 'vue'
import Router from 'vue-router'
import DashboardRoute from './views/DashboardRoute.vue'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'DashboardRoute',
      component: DashboardRoute
    },
    { path: '',
     name: 'DashboardRoute',
      component: DashboardRoute },
    {
      path: '/Login',
      name: 'LoginRoute',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LoginRoute.vue')
    },
    { path: '*', redirect: '/' }
  ]
})
export default router