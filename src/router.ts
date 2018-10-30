import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/about',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/about',
          name: 'about',
          component: () => import('./views/About.vue')
        }, {
          path: '/typeScript',
          name: 'typeScript',
          redirect: '/typeScript/introduce',
          component: () => import('./views/typeScript/index.vue'),
          children: [
            {
              path: '/typeScript/introduce',
              name: 'introduce',
              component: () => import('./views/typeScript/introduce/index.vue')
            },
            {
              path: '/typeScript/decorator',
              name: 'decorator',
              component: () => import('./views/typeScript/decorator/index.vue')
            },
            {
              path: '/typeScript/baseType',
              name: 'baseType',
              component: () => import('./views/typeScript/baseType/index.vue')
            }
          ]
        },{
          path: '/Vue',
          name: 'Vue',
          redirect: '/Vue/introduce',
          component: () => import('./views/Vue/index.vue'),
          children: [
            {
              path: '/Vue/introduce',
              name: 'Vue介绍',
              component: () => import('./views/Vue/introduce/index.vue')
            }
          ]
        }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
