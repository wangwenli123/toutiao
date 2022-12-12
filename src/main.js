import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'//引入组件 还要注册
import './plugins/element.js'

import './styles/index.less'



Vue.config.productionTip = false
Vue.use(ElementUI);//注册需要的组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
