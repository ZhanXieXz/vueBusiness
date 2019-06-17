import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classifyPage/classify'
import goodsDetails from '@/components/details/goodsDetails'
import cart from '@/components/cart/cart'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/classify',
      name: 'classify',
      component: classify
    }, {
      path: '/goodsDetails/:id',
      name: 'goodsDetails',
      component: goodsDetails
    }, {
      path: '/cart',
      name: 'carts',
      component: cart
    }
  ]
})
