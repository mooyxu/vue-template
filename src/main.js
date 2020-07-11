import Vue from 'vue'; Vue.config.productionTip = false
import App from './App.vue'

import router from '@/router'
import store from '@/store'

import ElementUI from 'element-ui'; Vue.use(ElementUI);
import 'element-ui/lib/theme-chalk/index.css';

import '@/utils/reset.css'
import '@/utils/initAxios'
import '@/api'


new Vue({
  router,
  store,
  render: h => h(App),
  async beforeCreate() {
  },
}).$mount('#app')
