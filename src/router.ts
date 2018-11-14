import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/about',
      name: 'home',
      component:()=>import(/*webpackChunkName: "home"*/'./views/Home.vue'),
      children: [
        // 首页
        {
          path: '/about',
          name: 'about',//首页
          component: () => import(/*webpackChunkName: "about"*/'./views/About.vue')
        },
        // typescript
        {
          path: '/typeScript',
          name: 'typeScript',//typescript
          redirect: '/typeScript/introduce',
          component: () => import(/*webpackChunkName: "typescript"*/'./views/typeScript/index.vue'),
          children: [
            {
              path: '/typeScript/introduce',
              name: 'introduce',
              component: () => import(/*webpackChunkName: "typescript"*/'./views/typeScript/introduce/index.vue')
            },
            {
              path: '/typeScript/decorator',
              name: 'decorator',
              component: () => import(/*webpackChunkName: "typescript"*/'./views/typeScript/decorator/index.vue')
            },
            {
              path: '/typeScript/baseType',
              name: 'baseType',
              component: () => import(/*webpackChunkName: "typescript"*/'./views/typeScript/baseType/index.vue')
            }
          ]
        },
        //python
        {
          path:"python",
          name:"python",
          component:()=>import(/*webpackChunkName:"python"*/'./views/python/index.vue'),
          children:[
            {
              path:"introduce",
              name:"python介绍",
              component:()=>import(/*webpackChunkName:"python"*/'./views/python/introduce/index.vue'),
            },
            {
              path:"function",
              name:"python函数",
              component:()=>import(/*webpackChunkName:"python"*/'./views/python/function/index.vue'),
            },
          ]
        },
        //Vue
        {
          path: '/Vue',
          name: 'Vue',//vue
          redirect: '/vue/introduce',
          component: () => import(/*webpackChunkName: "vue"*/'./views/Vue/index.vue'),
          children: [
            {
              path: 'introduce',
              name: 'Vue介绍',
              component: () => import(/*webpackChunkName: "vue"*/'./views/Vue/introduce/index.vue')
            },
            {
              path: 'life',
              name: 'vue生命周期',
              component: () => import(/*webpackChunkName: "vue"*/'./views/Vue/life/index.vue')
            },
            {
              path: 'component',
              name:'component组件',
              component:()=>import(/*webpackChunkName: "vue"*/'./views/Vue/内置组件/component.vue')
            },
            {
              path: 'mixins',
              name: 'vue混入',
              component: () => import(/*webpackChunkName: "vue"*/'./views/Vue/mixins/index.vue')
            },
            {
              path: 'flex',
              name: 'flex',
              component: () => import(/*webpackChunkName: "vue"*/'./views/Vue/plugin/flex.vue')
            }, {
              path: 'router',
              name:'路由',
              component:()=>import(/*webpackChunkName: "vue"*/'./views/Vue/plugin/router.vue')
            },{
              path: 'viser/chart',
              name: '图表',
              component: () => import(/*webpackChunkName: "vue"*/'./views/Vue/viser/chart.vue')
            }
          ]
        },
        //react
        {
          path: "react",
          name: "react",
          component: () => import/*webpackChunkName: "react"*/("./views/react/index.vue"),
          children: [
            {
              path: "introduce",
              name: "react介绍",
              component: () => import/*webpackChunkName: "react"*/("./views/react/introduce/index.vue")
            }, {
              path: "component",
              name: "组件",
              component: () => import/*webpackChunkName: "react"*/("./views/react/component/index.vue")
            }
          ]
        },
        //正则表达式
        {
          path: "regular",
          name: "正则表达式",
          component: () => import(/*webpackChunkName: "regular"*/"./views/regular/index.vue"),
          children: [
            {
              path: "introduce",
              name: "正则介绍",
              component: () => import(/*webpackChunkName: "regular"*/"./views/regular/introduce/index.vue")
            }
          ]
        },
        //html5
        {
          path: '/html5',
          name: 'html5',
          redirect: '/html5/introduce',
          component: () => import(/*webpackChunkName: "html5"*/'./views/html5/index.vue'),
          children: [
            {
              path: '/html5/introduce',
              name: 'html5介绍',
              component: () => import(/*webpackChunkName: "html5"*/'./views/html5/introduce/index.vue')
            }, {
              path: 'canvas',
              name: 'canvas元素',
              component: () => import(/*webpackChunkName: "html5"*/'./views/html5/element/canvas.vue'),
            }, {
              path: 'video',
              name: 'html5元素',
              component: () => import(/*webpackChunkName: "html5"*/'./views/html5/element/video.vue'),
            }, {
              path: '/html5/element/img',
              name: 'html5元素img',
              component: () => import(/*webpackChunkName: "html5"*/'./views/html5/element/img.vue'),
            },{
              path: 'p',
              name:'p元素',
              component:()=>import(/*webpackChunkName: "html5"*/'./views/html5/element/p.vue')
            }
          ]
        },
        //git
        {
          path: 'git',
          name: 'git',
          component: () => import(/*webpackChunkName: "git"*/'./views/git/index.vue'),
          children: [
            {
              path: 'command',
              name: '指令',
              component: () => import(/*webpackChunkName: "git"*/'./views/git/command.vue')
            }
          ]
        },
        //javascript
        {
          path: '/javascript',
          name: 'javascript',
          redirect: '/javascript/introduce',
          component: () => import(/*webpackChunkName: "javascript"*/'./views/javascript/index.vue'),
          children: [
            {
              path: '/javascript/introduce',
              name: 'javascript介绍',
              component: () => import(/*webpackChunkName: "javascript"*/'./views/javascript/introduce/index.vue'),
            }, {
              path:'type',
              name:'类型转换',
              component:() => import(/*webpackChunkName: "javascript"*/'./views/javascript/type/index.vue'),
            },{
              path: '/javascript/es6',
              name: 'es6',
              component: () => import(/*webpackChunkName: "javascript"*/'./views/javascript/es6/index.vue'),
            }, {
              path:'promise',
              name:'promise',
              component:()=>import(/*webpackChunkName: "javascript"*/'./views/javascript/promise/index.vue')
            },{
              path: '/javascript/object',
              name: 'object',
              component: () => import(/*webpackChunkName: "javascript"*/'./views/javascript/object/index.vue'),
            }, {
              path: 'object/array',
              name: '数组',
              component: () => import(/*webpackChunkName: "javascript"*/'./views/javascript/object/array.vue'),
            }, {
              path: 'object/string',
              name: '字符串',
              component: () => import(/*webpackChunkName: "javascript"*/'./views/javascript/object/string.vue'),
            },
          ]
        },
        // 易经
        {
          path: '/yijing',
          name: 'yijing',
          component: () => import(/*webpackChunkName: "yijing"*/'./views/yijing/index.vue')
        },
        //nodejs
        {
          path: '/nodejs',//nodejs
          name: 'nodejs',
          component: () => import(/*webpackChunkName: "nodejs"*/'./views/nodejs/index.vue')
        },
        //概念
        {
          path: '/concept',//概念
          name: 'concept',
          component: () => import(/*webpackChunkName: "concept"*/'./views/concept/index.vue'),
          children: [
            {
              path:"introduce",
              name:"概念介绍",
              component:()=>import(/*webpackChunkName: "concept"*/"./views/concept/introduce/index.vue")
            },
            {
              path: 'moduleSpecification',
              name: 'moduleSpecification',
              component: () => import(/*webpackChunkName: "concept"*/'./views/concept/moduleSpecification/index.vue'),
            }, {
              path: "gainian",
              name: "概念",
              component: () => import(/*webpackChunkName: "concept"*/"./views/concept/gainian.vue")
            }]
        },
        //功能
        {
          path: '/gongneng',//功能
          name: 'gongneng',
          component: () => import(/*webpackChunkName: "gongneng"*/'./views/gongneng/index.vue'),
          children: [
            {
              path:"introduce",
              name:"介绍",
              component:()=>import(/*webpackChunkName: "gongneng"*/'./views/gongneng/introduce/index.vue')
            },
            {
              path: 'uploadImg',
              name: '上传多张图片',
              component: () => import(/*webpackChunkName: "gongneng"*/'./views/gongneng/uploadImg.vue'),
            }, {
              path: 'function',
              name: '函数小功能',
              component: () => import(/*webpackChunkName: "gongneng"*/'./views/gongneng/function/index.vue'),
            }, {
              path: 'css3',
              name: 'css3功能',
              component: () => import(/*webpackChunkName: "gongneng"*/'./views/gongneng/css3/index.vue'),
            }
          ]
        },
        //生活
        {
          path: '/life',
          name: '生活',
          component: () => import(/*webpackChunkName: "life"*/'./views/life/index.vue'),
          children: [
            {
              path: 'av',
              name: '艾薇',
              component: () => import(/*webpackChunkName: "life"*/'./views/life/av/index.vue')
            }
          ]
        },
        //英语
        {
          path: '/english',
          name: '英语',
          component: () => import(/*webpackChunkName: "english"*/'./views/english/index.vue'),
          children: [
            {
              path: 'words',
              name: '单词',
              component: () => import(/*webpackChunkName: "english"*/'./views/english/word/index.vue')
            }
          ]
        },
        //网络
        {
          path:"network",
          name:"网络",
          component:()=>import(/*webpackChunkName:"network"*/'./views/network/index.vue'),
          children:[
            {
              path:'cmd',
              name:'命令行',
              component:()=>import(/*webpackChunkName:"network"*/'./views/network/cmd/index.vue'),
            }
          ]
        }
      ]
    }, {
      path: '/test',
      name: 'test',
      component: () => import(/*webpackChunkName: "test"*/'./test/index.vue')
    }
  ]
})
