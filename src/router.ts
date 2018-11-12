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
        // 首页
        {
          path: '/about',
          name: 'about',//首页
          component: () => import('./views/About.vue')
        },
        // typescript
        {
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
        },
        //Vue
        {
          path: '/Vue',
          name: 'Vue',//vue
          redirect: '/vue/introduce',
          component: () => import('./views/Vue/index.vue'),
          children: [
            {
              path: 'introduce',
              name: 'Vue介绍',
              component: () => import('./views/Vue/introduce/index.vue')
            },
            {
              path: 'life',
              name: 'vue生命周期',
              component: () => import('./views/Vue/life/index.vue')
            },
            {
              path: 'mixins',
              name: 'vue混入',
              component: () => import('./views/Vue/mixins/index.vue')
            },
            {
              path: 'flex',
              name: 'flex',
              component: () => import('./views/Vue/plugin/flex.vue')
            }, {
              path: 'viser/chart',
              name: '图表',
              component: () => import('./views/Vue/viser/chart.vue')
            }
          ]
        },
        //react
        {
          path: "react",
          name: "react",
          component: () => import("./views/react/index.vue"),
          children: [
            {
              path: "introduce",
              name: "react介绍",
              component: () => import("./views/react/introduce/index.vue")
            }, {
              path: "component",
              name: "组件",
              component: () => import("./views/react/component/index.vue")
            }
          ]
        },
        //正则表达式
        {
          path: "regular",
          name: "正则表达式",
          component: () => import("./views/regular/index.vue"),
          children: [
            {
              path: "introduce",
              name: "正则介绍",
              component: () => import("./views/regular/introduce/index.vue")
            }
          ]
        },
        //html5
        {
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
              path: 'canvas',
              name: 'canvas元素',
              component: () => import('./views/html5/element/canvas.vue'),
            }, {
              path: 'video',
              name: 'html5元素',
              component: () => import('./views/html5/element/video.vue'),
            }, {
              path: '/html5/element/img',
              name: 'html5元素img',
              component: () => import('./views/html5/element/img.vue'),
            }
          ]
        },
        //git
        {
          path: 'git',
          name: 'git',
          component: () => import('./views/git/index.vue'),
          children: [
            {
              path: 'command',
              name: '指令',
              component: () => import('./views/git/command.vue')
            }
          ]
        },
        //javascript
        {
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
            }, {
              path: 'object/string',
              name: '字符串',
              component: () => import('./views/javascript/object/string.vue'),
            },
          ]
        },
        // 易经
        {
          path: '/yijing',
          name: 'yijing',
          component: () => import('./views/yijing/index.vue')
        },
        //nodejs
        {
          path: '/nodejs',//nodejs
          name: 'nodejs',
          component: () => import('./views/nodejs/index.vue')
        },
        //概念
        {
          path: '/concept',//概念
          name: 'concept',
          component: () => import('./views/concept/index.vue'),
          children: [
            {
              path:"introduce",
              name:"概念介绍",
              component:()=>import("./views/concept/introduce/index.vue")
            },
            {
              path: 'moduleSpecification',
              name: 'moduleSpecification',
              component: () => import('./views/concept/moduleSpecification/index.vue'),
            }, {
              path: "gainian",
              name: "概念",
              component: () => import("./views/concept/gainian.vue")
            }]
        },
        //功能
        {
          path: '/gongneng',//功能
          name: 'gongneng',
          component: () => import('./views/gongneng/index.vue'),
          children: [
            {
              path:"introduce",
              name:"介绍",
              component:()=>import('./views/gongneng/introduce/index.vue')
            },
            {
              path: 'uploadImg',
              name: '上传多张图片',
              component: () => import('./views/gongneng/uploadImg.vue'),
            }, {
              path: 'function',
              name: '函数小功能',
              component: () => import('./views/gongneng/function/index.vue'),
            }, {
              path: 'css3',
              name: 'css3功能',
              component: () => import('./views/gongneng/css3/index.vue'),
            }
          ]
        },
        //生活
        {
          path: '/life',
          name: '生活',
          component: () => import('./views/life/index.vue'),
          children: [
            {
              path: 'av',
              name: '艾薇',
              component: () => import('./views/life/av/index.vue')
            }
          ]
        },
        //英语
        {
          path: '/english',
          name: '英语',
          component: () => import('./views/english/index.vue'),
          children: [
            {
              path: 'words',
              name: '单词',
              component: () => import('./views/english/word/index.vue')
            }
          ]
        },
      ]
    }, {
      path: '/test',
      name: 'test',
      component: () => import('./test/index.vue')
    }
  ]
})
