import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/stylus/base.styl'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    _top() {
      let el: any = this.$refs.top;
      el.$el.scrollTop = 0;
    }
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
window.onload = function () {
  
}
