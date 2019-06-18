export default {
  state: {
    carts: [],
    userToken: ''
  },

  mutations: {
    addCart(state, goods) {
      if (state.carts) {
        for (let i = 0; i < state.carts.length; i++) {
          if (goods.id == state.carts[i].id) {
            state.carts[i].num += 1
            localStorage.setItem('goodscart', JSON.stringify(state.carts))
            return
          }
        }
        state.carts.push(goods);
        localStorage.setItem('goodscart', JSON.stringify(state.carts))
        return
      }
      state.carts.push(goods);
      localStorage.setItem('goodscart', JSON.stringify(state.carts))
    },
    removeCart(state, goods) {
      if (state.carts) {
        for (let i = 0; i < state.carts.length; i++) {
          if (goods.id === state.carts[i].id) {
            state.carts[i].num = state.carts[i].num - 1;
            console.log('succ')
            if (state.carts[i].num == 0) {
              state.carts.splice(i, 1)
            }
            localStorage.setItem('goodscart', JSON.stringify(state.carts))
            return
          }
        }
      }
    },
    login(state, token) {
      localStorage.setItem('token', token);
      state.userToken = token
    }
  }
  // actions: {
  //   addCart(ctx, goods) {
  //     ctx.commit('addCart', goods);
  //   },
  //   removeCart(ctx, goods) {
  //     ctx.commit('removeCart', goods);
  //   },
  //   logins(ctx, user) {
  //     ctx.commit('login', user)
  //   }
  // }
}