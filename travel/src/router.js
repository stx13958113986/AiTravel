import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/index.vue'
import user_login from './views/user_login.vue'
import user_reg from './views/user_reg.vue'
import about_us from './views/about_us.vue'
import details from './views/details.vue'
import privated from './views/private.vue'
 import selection from './views/selection.vue'
// import update from './views/update.vue'
Vue.use(Router)
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/user_login',
      component: user_login
    },
    {
      path: '/user_reg',
      component: user_reg
    },
    {
      path: '/about_us',
      component: about_us
    },
    {
      path: '/details',
      component: details
    },
    {
      path: '/privated',
      component: privated
    },
    {
      path: '/selection',
      component: selection
    },
    // {
    //   path: '/update',
    //   component: update
    // },
  ]
})
