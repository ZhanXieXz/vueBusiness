<template>
    <div class="wrap">
        <h1>Shopping Cart ({{this.goodsNum}})</h1>
        <div class="cartGoods-wrap">
            <ul>
                <li class="head">
                    <div class="check-all" @click="handleProductAll()" :class="{'active':checkAllFlag}">
                        <span class="check-icon"></span>
                        <span class="check1-icon"></span>
                    </div>
                    <span class="product">product</span>
                    <span class="qty">Qty</span>
                    <span class="total">Total Amount</span>
                    <span class="date">Date</span>
                    <div class="del">
                        <span class="del-icon"></span>
                    </div>
                </li>
                <li class="product-msg" v-for="goods in this.goods" :key="goods.id" :data-id="goods.id">
                    <div class="check" @click="handleProduct(goods)" :class="{'active':goods.checked}">
                        <span class="check-icon"></span>
                        <span class="check1-icon"></span>
                    </div>
                    <div class="product">
                        <img :src=goods.image alt="" class="goodsImg">
                        <span>{{goods.name}}</span>
                    </div>
                    <span class="qty">{{goods.num}}</span>
                    <span class="total">{{goods.price}}</span>
                    <span class="date">操作日期</span>
                    <div class="del" @click="delGoods(goods)">
                        <span class="del-icon"></span>
                    </div>
                </li>
            </ul>
            <div class="foot-s" v-show="this.goodsNum">
                <span class="all-price">${{this.price}}.00</span>
                <button class="pay-btn">pay now</button>
            </div>
            <div class="hint" v-show="!this.goodsNum">
                您的购物车没有商品，快去挑选吧
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "carts",
    data () {
        return {
            goods: "", //直接取缓存
            goodsNum: 0,
            toggle: false,
            goodsArr: [],
            price: 0,
            productList: [],
            checkAllFlag: false
        }
    },
    mounted () {
        if (JSON.parse(localStorage.getItem("goodscart"))) {
            this.goods = JSON.parse(localStorage.getItem("goodscart"));
            this.goodsNum = JSON.parse(localStorage.getItem("goodscart")).length;
        }
    },
    methods: {
        handleProductAll () {
            this.checkAllFlag = !this.checkAllFlag;
            this.goods.forEach((goods,num) => {
                if (typeof goods.checked == 'undefined') {
                    this.$set(goods,'checked',this.checkAllFlag);
                    this.calmoney();
                } else {
                    this.$set(goods,'checked',this.checkAllFlag);
                    this.calmoney();
                }
            })
        },
        delGoods (item) {
            let index = this.goods.indexOf(item);
            this.goods.splice(index,1);
            this.calmoney();
        },
        handleProduct (goods) {
            if (typeof goods.checked == 'undefined') {
                 this.$set(goods,'checked',true);
                 this.calmoney();
            } else { 
                goods.checked = !goods.checked;
                this.calmoney()
            }
        },
        calmoney() {
            this.price = 0;
            this.goods.forEach((item,num) =>{
                if (item.checked) {
                    this.price += item.price * item.num
                }
            });
        }
    }
}
</script>

<style lang="stylus" scoped>
.wrap {
    width 1140px
    margin 0 auto
    padding 20px
    h1 {
        font-size 20px
    }
    .cartGoods-wrap {
        margin-top 30px
        li {
            position relative
        }
        .head {
            font-size 14px
            padding-bottom 20px
            border-bottom 1px solid #999
            .product {
                display inline-block
                width 40%
                padding-left 30px
            }
            .qty {
                display inline-block
                width 14%;
            }
            .total {
                display inline-block
                width 20%;
            }
            .date{
                display inline-block
                width 14%;
            }
            .del {
                display inline-block
                width 50px;
                text-align center
                cursor pointer
                .del-icon {
                    width 16px
                    height 17px
                    display inline-block
                    background-image url(../../assets/index.png)
                    background-position -507px -328px
                }
            }
            .check-all:hover{
                border-color #0cb46a
            }
            .del-icon:active {
                background-position -558px -328px
            }
        }
        .product-msg {
            font-size 14px
            border-bottom 1px solid #999
            padding 20px 0
            .product {
                display inline-block
                width 40%
                padding-left 55px
                .goodsImg {
                    width 100px
                    height 100px
                }
            }
            .qty {
                display inline-block
                width 14%;
            }
            .total {
                display inline-block
                width 20%;
            }
            .date{
                display inline-block
                width 14%;
            }
            .del {
                display inline-block
                width 50px;
                text-align center
                cursor pointer
                .del-icon {
                    width 16px
                    height 17px
                    display inline-block
                    background-image url(../../assets/index.png)
                    background-position -507px -328px
                }
            }
            .del-icon:active {
                background-position -558px -328px
            }
        }
        .hint {
            text-align center
            margin-top 30px
            font-size 20px
            color #000
        }
    }
    .check-all,check {
        display inline-block
    }
    .check {
        position absolute
        top 60px
    }
    .check-icon, .check1-icon {
        width 20px
        height 20px
        cursor pointer
        background-image url("../../assets/index.png")
        background-position -791px -120px
        display inline-block
        vertical-align middle
    }
    .check1-icon {
        display none
        background-position -909px -120px
    }
    .check-icon:hover {
        background-position -852px -120px
    }
    .active .check1-icon {
        display inline-block
    }
    .active .check-icon {
        display none
    }
    .foot-s {
        float right
    }
    .pay-btn {
        width 200px
        height 60px
        background #0cb46a
        text-align center
        line-height 60px
        color #fff
        font-size 20px
        border-radius 4px
        margin 40px 0
        cursor pointer
    }
    .all-price {
        font-size: 32px;
        font-weight: bold;
        color: #24bb78;
        margin-right 20px
        vertical-align middle
    }
}
</style>
