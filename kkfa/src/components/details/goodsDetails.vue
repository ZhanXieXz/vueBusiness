<template>
    <div class="wrap">
        <div class="details clearfix">
            <div class="right">
                <h3>{{product.name}}</h3>
                <div class="info">{{product.info}}</div>
                <div style="position:relative">
                    <div class="product-essential">
                        <img :src="product.image" alt="">
                    </div>
                    <div class="essential">
                        <div class="price">
                            <p>price:</p>
                            <p class="newprice">$ {{product.price}}.00</p>
                            <p class="oldprice">usd {{product.oldPrice}}</p>
                        </div>
                        <div class="product-msg">
                            <span class="platform">Platform:</span>
                            <div class="icon-wrap">
                                <span class="platform-icon platform-icon1"></span>
                                <span class="platform-icon platform-icon2"></span>
                            </div>
                        </div>
                        <div class="product-msg">
                            <span class="region">Region:</span>
                            <div class="icon-wrap">
                                <span class="region-icon"></span>
                            </div>
                        </div>
                        <div class="product-msg">
                            <span>Tags:</span>
                            <div class="icon-wrap">
                                <span>FPS</span>
                            </div>
                        </div>
                        <div class="product-msg">
                            <span class="quantity">Quantity:</span>
                            <div class="icon-wrap">
                                <button class="add-btn item-btn" @click="handleProductNum('-')">-</button>
                                <input type="text" class="quantity-ipt" v-model=this.value>
                                <button class="reduced-btn item-btn" @click="handleProductNum('+')">+</button>
                            </div>
                            <span>1-100</span>
                        </div>
                        <div class="product-msg">
                            <span class="payment">Payment:</span>
                            <span class="payment-icon"></span>
                        </div>
                        <div class="buy-wrap">
                            <button class="buy-btn" @click="buyProduct">Buy now</button>
                            <span class="cart-icon"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'goodsDetails',
  data () {
    return {
      product: '',
      value: 1,
      productNum: 0
    }
  },
  created: function () {
    const id = this.$route.params.id
    this.axios.get('/static/goods/goods.json').then((res) => {
      var data = res.data.data;
      for (let i = 0; i < data.length; i++) {
        const dataId = data[i].id
        if (id == dataId) {
          this.product = data[i];
        }
      }
    })
  },
  methods: {
    buyProduct () {
      this.product.num = this.value;
      this.$store.commit('addCart', this.product);
      this.$router.push('/cart')
    },
    handleProductNum (handleSymbol) {
      if (handleSymbol == '-') {
        this.productNum = this.value > 1 ? this.value -- : 1;
      }
      this.value ++
    }
  }
}
</script>

<style scoped lang="stylus">
    .wrap {
        width 100%
        min-height 600px
        background-color #f6f6f6
        margin-top 30px
        .details {
            width 1140px
            background: #fff
            border-radius: 3px
            border-bottom: 15px
            padding-right: 0px
            padding-left 20px
            margin 0 auto
            .right {
                width: 66.66666667%
                float left
                border-right: 1px dashed #e3e3e3
                padding-top: 15px
                padding-left: 0px
                min-height: 550px
                overflow hidden
                position relative
                h3 {
                    font-size: 24px
                    color: #343434
                    padding-right: 26px
                    line-height: 25px
                }
                .info {
                    font-size: 12px
                    height: 40px
                    color: #a0a0a0
                    line-height: 20px
                    margin-top: 8px
                    overflow hidden
                }
                .product-essential {
                    width 200px
                    height 270px
                    position absolute 
                    img {
                        width 200px
                        height 270px
                    }
                }
                .essential {
                    padding-left 250px
                    padding-right 20px
                    .price {
                        background: #F1F1F1
                        margin-top: 10px
                        border-radius: 3px
                        min-height: 90px
                        position: relative
                        padding 0 20px
                        box-sizing border-box
                        p {
                            display inline-block
                            color #333
                            font-weight bold
                            font-size 22px
                            margin-top 20px
                            margin-left 10px
                        }
                        .newprice {
                            display inline-block
                            color: #0cb46a
                            font-size: 32px
                            font-weight: normal
                            padding-right: 10px
                        }
                        .oldprice {
                            display inline-block
                            font-size: 18px
                            color: #777
                            font-weight: normal
                            text-decoration line-through
                        }
                    }
                    .product-msg {
                        margin 20px 0
                        .platform {
                            vertical-align 8px
                        }
                        .region {
                            vertical-align 6px
                        }
                        .quantity {
                            vertical-align -6px
                        }
                        .payment {
                            vertical-align top 
                        }
                        .icon-wrap {
                            font-size 0
                            display inline-block
                            margin-left 20px
                            span {
                                font-size 12px
                            }
                            .platform-icon, .region-icon {
                                display inline-block
                                background-image url(../../assets/index.png)
                            }
                            .platform-icon1 {
                                width 37px
                                height 25px
                                background-position -108px -464px
                                margin-right 10px
                            }
                            .platform-icon2 {
                                width 30px
                                height 27px
                                background-position -108px -323px
                            }
                            .region-icon {
                                width 34px
                                height 22px
                                background-position -641px -633px
                            }
                            .item-btn {
                                transition: color .1s ease-in-out 0s,background-color .1s ease-in-out 0s
                                font-size: 12px
                                line-height: 0px
                                padding: 0px
                                height: 30px
                                width: 20px
                                text-align: center
                                font-weight: normal
                                background: #f0f0f0
                            }
                            .add-btn {
                                border-left: none
                                border-radius: 0 3px 3px 0
                            }
                            .reduce-btn {
                                border-right: none
                                border-radius: 0 3px 3px 0
                            }
                            .item-btn:hover {
                                color: #fff
                                background-color #0cb46a
                            }
                            .quantity-ipt {
                                width 60px
                                height 30px
                                box-sizing border-box
                                display inline-block
                                border: 1px solid #f1f1f1
                                font-size 14px
                                text-align center
                            }
                        }
                        .payment-icon {
                            display inline-block
                            width 340px
                            height 40px
                            background-image url(../../assets/pay.png)
                        }
                    }
                    .buy-wrap {
                        margin-top 30px
                        border-top 1px solid #f1f1f1
                        .buy-btn {
                            font-size 18px
                            width 120px
                            height 40px
                            border: 1px solid transparent
                            border-radius: 4px
                            background-color #0cb46a
                            color #fff
                            margin-top 20px
                            cursor pointer
                        }
                        .buy-btn:hover {
                            background-color #20A76B
                        }
                        .cart-icon  {
                            width 40px
                            height 40px
                            display inline-block
                            background-image url(../../assets/index.png)
                            background-position -9px -156px
                            vertical-align bottom
                            margin-left 10px
                        }
                    }
                }
            }
        }
    }
</style>
