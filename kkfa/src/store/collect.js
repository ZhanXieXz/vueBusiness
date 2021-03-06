export default {
  state: {
    collect: []
  },
  mutations: {
    addCollect(state, goods) {
      state.collect.push(goods);
            // localStorage.collect = goods
    },
    removeCollect(state, goods) {
      for (let i = 0; i < state.collect.length; i++) {
        if (state.collect[i].id == goods.id) {
          state.collect.splice(i, 1)
        }
      }
            // localStorage.collect = goods
    }
  },
  actions: {
    addCollects(ctx, goods) {
      ctx.commit('addCollect', goods)
    },
    removeCollects(ctx, goods) {
      ctx.commit('removeCollect', goods)
    }
  }
}