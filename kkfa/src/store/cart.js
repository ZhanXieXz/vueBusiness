export default {
    state: {
        carts: [],
        user_token: ''
    },

    mutations: {
        addCart(state,goods){
            var goodsArr = JSON.parse(localStorage.getItem('goodscart'))
            if(goodsArr) {
                for (let i = 0; i < goodsArr.length; i++) {
                    if(goods.id == goodsArr[i].id) {
                        goodsArr[i].num += 1
                        localStorage.setItem('goodscart',JSON.stringify(goodsArr))
                        return 
                    }
                }
                goodsArr.push(goods);
                localStorage.setItem('goodscart',JSON.stringify(goodsArr))
                return
            }
            state.carts.push(goods);
            localStorage.setItem('goodscart',JSON.stringify(state.carts))
        },
        removeCart(state,goods) {
            var goodsArr = JSON.parse(localStorage.getItem('goodscart'))
            if (goodsArr) {
                for (let i = 0; i < goodsArr.length; i++) {
                    if(goods.id === goodsArr[i].id) {
                        goodsArr[i].num = goodsArr[i].num - 1;
                        console.log('succ')
                        if (goodsArr[i].num == 0) {
                            goodsArr.splice(i,1)
                        }
                        localStorage.setItem('goodscart',JSON.stringify(goodsArr))
                        return 
                    }
                }
            }
        },
        login(state,token) {
            localStorage.setItem("token", token);
            state.user_token = token
        }
    },
    actions: {
        add_cart(ctx,goods){
            ctx.commit('addCart',goods);
         },
         remove_cart(ctx,goods) {
            ctx.commit('removeCart',goods);
         },
         logins(ctx,user) {
            ctx.commit('login',user)
         }
    }
}