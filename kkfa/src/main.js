// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import kkfa from './kkfa'
import router from './router'
import VueAwisomeSwipei from 'vue-awesome-swiper'
import VueLazyload from 'vue-lazyload'
import store from './store/index'
import '../static/reset.css'
import 'swiper/dist/css/swiper.css'
import './css/main.css'
import './css/icon.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
Vue.use(VueAwisomeSwipei)
Vue.use(VueLazyload, {
  throttleWait: 300,
  error: require('./assets/index.png'),
  loading: require('./assets/lazy.png')
})
/* eslint-disable no-new */
new Vue({
  el: '#kkfa',
  router,
  store,
  components: { kkfa },
  template: '<kkfa/>'
})
