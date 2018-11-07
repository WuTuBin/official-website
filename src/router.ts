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
          name: 'about',//首页
          component: () => import('./views/About.vue')
        }, {
          path: '/typeScript',
          name: 'typeScript',//typescript
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
        }, {
          path: '/Vue/:id',
          name: 'Vue',//vue
          redirect: '/Vue/introduce',
          component: () => import('./views/Vue/index.vue'),
          children: [
            {
              path: '/Vue/introduce',
              name: 'Vue介绍',
              component: () => import('./views/Vue/introduce/index.vue')
            },
            {
              path: '/Vue/life',
              name: 'vue生命周期',
              component: () => import('./views/Vue/life/index.vue')
            },
            {
              path: '/Vue/mixins',
              name: 'vue混入',
              component: () => import('./views/Vue/mixins/index.vue')
            }
          ]
        }, {
          path: '/html5',
          name: 'html5',
          redirect: '/html5/introduce',
          component: () => import('./views/html5/index.vue'),
          children: [
            {
              path: '/html5/introduce',
              name: 'html5介绍',
              component: () => import('./views/html5/introduce/index.vue')
            }, {
              path: '/html5/video',
              name: 'html5元素',
              component: () => import('./views/html5/element/video.vue'),
            }, {
              path: '/html5/element/img',
              name: 'html5元素img',
              component: () => import('./views/html5/element/img.vue'),
            }
          ]
        }, {
          path: '/javascript',
          name: 'javascript',
          redirect: '/javascript/introduce',
          component: () => import('./views/javascript/index.vue'),
          children: [
            {
              path: '/javascript/introduce',
              name: 'javascript介绍',
              component: () => import('./views/javascript/introduce/index.vue'),
            }, {
              path: '/javascript/es6',
              name: 'es6',
              component: () => import('./views/javascript/es6/index.vue'),
            }, {
              path: '/javascript/object',
              name: 'object',
              component: () => import('./views/javascript/object/index.vue'),
           }, {
              path: 'object/array',
              name: '数组',
              component: () => import('./views/javascript/object/array.vue'),
            },
          ]
        }, {
          path: '/yijing',
          name: 'yijing',
          component: () => import('./views/yijing/index.vue')
        }, {
          path: '/nodejs',//nodejs
          name: 'nodejs',
          component: () => import('./views/nodejs/index.vue')
        }, {
          path: '/concept',//概念
          name: 'concept',
          component: () => import('./views/concept/index.vue'),
          children: [{
            path: 'moduleSpecification',
            name: 'moduleSpecification',
            component: () => import('./views/concept/moduleSpecification/index.vue'),
          }]
        }, {
          path: '/gongneng',//功能
          name: 'gongneng',
          component: () => import('./views/gongneng/index.vue'),
          children: [
            {
              path: 'uploadImg',
              name: '上传多张图片',
              component: () => import('./views/gongneng/uploadImg.vue'),
            }, {
              path: 'function',
              name: '函数小功能',
              component: () => import('./views/gongneng/function/index.vue'),
            }
          ]
        },{
          path: '/life',
          name: '生活',
          component:() => import('./views/life/index.vue'),
          children:[
            {
              path:'av',
              name:'艾薇',
              component:()=>import('./views/life/av/index.vue')
            }
          ]
        }
      ]
    }, {
      path: '/test',
      name: 'test',
      component: () => import('./test/index.vue')
    }
  ]
})
