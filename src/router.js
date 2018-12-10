import Vue from 'vue'
import Router from 'vue-router'
import DashboardRoute from './views/DashboardRoute.vue'

Vue.use(Router)

const router= new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/dashboard',
      name: 'DashboardRoute',
      component: DashboardRoute,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'botInteraction',
          name: 'BotInteraction',
          component:  () => import(/* webpackChunkName: "about" */ './components/dashboards/BotInteraction.vue')
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'campus',
          name: 'CampusAccess',
          component:  () => import(/* webpackChunkName: "about" */ './components/dashboards/CampusAccess.vue')
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'events',
          name: 'EventsAdd',
          component:  () => import(/* webpackChunkName: "about" */ './components/dashboards/EventsAdd.vue')
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'sleep',
          name: 'SleepHabits',
          component:  () => import(/* webpackChunkName: "about" */ './components/dashboards/SleepHabits.vue')
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'suggestions',
          name: 'Suggestions',
          component:  () => import(/* webpackChunkName: "about" */ './components/dashboards/Suggestions.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'LoginRoute',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/LoginRoute.vue')
    },
    { path: '*', redirect: '/dashboard' },
    { path: '/', redirect: '/dashboard' },
    { path: '', redirect: '/dashboard' },
    { path: '/dashboard', redirect: '/dashboard/botInteraction' }
  ]
})
export default router