import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/home'
import classify from '@/components/classifyPage/classify'
import goodsDetails from '@/components/details/goodsDetails'
import cart from '@/components/cart/cart'
import user from '@/components/userCenter/my'
import profile from '@/components/userCenter/components/rightProfile'
import security from '@/components/userCenter/components/rightSecurity'
import orders from '@/components/userCenter/components/rightOrders'
import collection from '@/components/userCenter/components/rightCollect'
import notification from '@/components/userCenter/components/rightNotifica'
import ticket from '@/components/userCenter/components/rightTticket'

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
    }, {
      path: '/user',
      component: user,
      children: [
        {
          path: '',
          name: 'profile',
          component: profile
        }, {
          path: 'security',
          name: 'security',
          component: security
        }, {
          path: 'orders',
          name: 'orders',
          component: orders
        }, {
          path: 'collection',
          name: 'collection',
          component: collection
        }, {
          path: 'notification',
          name: 'notification',
          component: notification
        }, {
          path: 'ticket',
          name: 'ticket',
          component: ticket
        }
      ]
    }
  ]
})
