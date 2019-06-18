<template>
  <div class="content">
    <div class="discounts-goods clearfix">
      <ul>
        <li class="kkfa-goods" v-for="item in tuiguang" :key="item.id" @click="goodsPageShow(item)">
          <img v-lazy="item.image" class="goods-img">
          <span class="discounts-detail">-{{item.disconunts}}%</span>
          <span class="goods-price">$ {{item.price}}</span>
        </li>
      </ul>
    </div>
    <div class="goods-nav1-4">
      <h2>NEW PRODUCTS</h2>
      <div class="leftGoods-nav">
        <div>
          <swiper class="swiper-wrap" :options="swipers" v-if="swiper.length">
            <swiper-slide v-for="items in swiper" :key="items.id" @click="goodsPageShow(items)">
              <img v-lazy="items.image" class="leftGoods-Img">
              <span class="goods-price">${{items.price}}</span>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
      </div>
      <div class="rightGoods-nav">
        <div
          class="right-goods kkfa-goods"
          v-for="item in products1"
          :key="item.id"
          @click="goodsPageShow(item)"
        >
          <img v-lazy="item.image" class="rightImg">
          <span class="goods-price">$ {{item.price}}</span>
        </div>
      </div>
    </div>
    <div class="goods-carousel">
      <div>
        <h2>NEW PRODUCTS</h2>
        <ul>
          <li class="title-nav">STEAM GAME</li>
          <li class="title-nav">ORIGIN GAME</li>
        </ul>
        <div class="more-goods" @click="goClassifyPage()">
          MORE
          <span class="arrow"></span>
        </div>
      </div>
      <div class="carousel-content">
        <span class="right-arrow" data-symbol="-" @click="autoplay($event)"></span>
        <div class="carousel-wrap carousel2">
          <ul class="js-carousel">
            <li v-for="(carousel,index) in footerBanner" :key="carousel.id">
              <img v-lazy="carousel.image" class="carousel-goodsImg">
              <p class="goods-title">
                <a href>{{carousel.name}}</a>
              </p>
              <div>
                <span class="price">${{carousel.price}}</span>
                <span class="del-price">${{carousel.oldPrice}}</span>
              </div>
              <div class="goodsMask-wrap">
                <span class="mask"></span>
                <div class="mask-conent">
                  <div>
                    <span
                      class="cart-icon"
                      @click="addCart($event,index,carousel)"
                      :class="{cartActive:cartIndex[index]}"
                    ></span>
                    <span
                      class="collect-icon"
                      @click="collect($event,index,carousel)"
                      :class="{collectActive:collIndex[index]}"
                    ></span>
                  </div>
                  <p>Stock In Stock</p>
                  <button @click="goodsPageShow(carousel)">MORE DETAILS</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <span class="left-arrow" data-symbol="+" @click="autoplay($event)"></span>
      </div>
    </div>
    <div class="goods-nav0-3 clearfix">
      <div>
        <h2>NEW PRODUCTS</h2>
        <ul>
          <li class="title-nav active">STEAM GAME</li>
          <li class="title-nav">ORIGIN GAME</li>
        </ul>
        <div class="more-goods" @click="goClassifyPage()">
          MORE
          <span class="arrow"></span>
        </div>
      </div>
      <div>
        <div
          class="nav0-3-wrap"
          v-for="footNav in footer"
          :key="footNav.id"
          @click="goodsPageShow(footNav)"
        >
          <img v-lazy="footNav.image">
          <span class="goods-price">$ {{footNav.price}}</span>
        </div>
      </div>
    </div>
    <div class="go_carts" @click="goCart">
      <span class="cart-icon"></span>
      <span class="goods_num" v-show="this.goodNums">{{this.goodNums}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeMiddleGoods',
  props: {
    tuiguang: Array,
    swiper: Array,
    products1: Array,
    products2: Array,
    footerBanner: Array,
    footer: Array
  },
  data() {
    return {
      cartIndex: [],
      collIndex: [],
      activeIndex: false,
      dis: 190,
      swipers: {
        loop: true,
        pagination: '.swiper-pagination',
        paginationClickable: true
      },
      scrollY: 0,
      goodNums: 0
    };
  },
  methods: {
    addCart(goods, index, carousel) {
      var obj = {};
      obj.id = carousel.id;
      obj.image = carousel.image;
      obj.name = carousel.name;
      obj.price = carousel.price;
      obj.num = 1;
      if (localStorage.getItem('token')) {
        this.$set(this.cartIndex, index, !this.cartIndex[index]);
        if (this.cartIndex[index]) {
          // 添加购物车
          this.$store.commit('addCart', obj);
          this.goodNums = this.$store.state.cart.carts.length
        } else {
          // 购物车去除
          this.$store.commit('removeCart', obj);
          this.goodNums = this.$store.state.cart.carts.length
        }
      } else {
        document.getElementsByClassName('login-wrap')[0].style.display = 'block';
      }
    },
    collect(goods, index, carousel) {
      var obj = {};
      obj.id = carousel.id;
      obj.image = carousel.image;
      obj.name = carousel.name;
      obj.price = carousel.price;
      if (localStorage.getItem('token')) {
        this.$set(this.collIndex, index, !this.collIndex[index]);
        if (this.collIndex[index]) {
          // 添加购物车
          this.$store.commit('addCollect', obj);
        } else {
          // 购物车去除
          this.$store.commit('removeCollect', obj);
        }
      } else {
        document.getElementsByClassName('login-wrap')[0].style.display =
          'block';
      }
    },
    goClassifyPage() {
      this.$router.push({ path: '/classify' });
    },
    goodsPageShow(items) {
      this.$router.push({ name: 'goodsDetails', params: { id: items.id }});
    },
    autoplay(e) {
      var sys = e.toElement.dataset.symbol;
      if (sys == '-') {
        this.dis = this.dis * 2;
        const l = e.currentTarget.nextElementSibling.children[0];
        l.appendChild(l.children[0]);
        l.style.marginLeft = -this.dis + 'px';
        l.style.marginLeft = 0;
        // 尾部
      } else {
        // 头部
        this.dis = this.dis * 2;
        const r = e.currentTarget.previousElementSibling.children[0];
        r.insertBefore(r.lastChild, r.children[0]);
        r.style.marginRight = -this.dis + 'px';
        r.style.marginRight = 0;
      }
    },
    goCart() {
      this.$router.push({ path: '/cart' });
    }
  },
  mounted() {
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
    const historyProduct = JSON.parse(localStorage.getItem('goodscart'));
    if (historyProduct) {
      this.$store.state.cart.carts = historyProduct;
      this.goodNums = historyProduct.length
    }
  }
};
</script>

<style scoped lang="stylus">
.content >>> .swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  display: inline-block;
  cursor: pointer;
  background: #fff;
  border-radius: 50%;
  margin-right: 16px;
  opacity: 1;
}

.content >>> .swiper-pagination-bullet-active {
  width: 42px;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  background-color: #24bb78;
}

.content {
  width: 1140px;
  margin: 0 auto;
  margin-top: 14px;

  .discounts-goods {
    font-size: 0;

    li {
      display: inline-block;
      position: relative;
      float: left;

      img {
        width: 370px;
        height: 230px;
      }

      .discounts-detail {
        width: 56px;
        height: 56px;
        line-height: 56px;
        display: inline-block;
        background-image: url('../../../assets/index.png');
        background-position: -234px -9px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: 900;
        font-style: italic;
        position: absolute;
        top: 8px;
        right: 10px;
      }

      .goods-price {
        width: 110px;
        height: 44px;
        line-height: 44px;
        display: inline-block;
        background-image: url('../../../assets/index.png');
        background-position: -308px -15px;
        text-align: center;
        font-size: 20px;
        font-weight: 900;
        color: #333;
        font-style: italic;
        position: absolute;
        bottom: 28px;
        right: 0;
      }
    }

    li:nth-child(2) {
      margin: 0 15px;
    }
  }

  .goods-nav1-4 {
    margin-top: 81px;
    font-size: 0;
  }

  h2 {
    font-size: 28px;
    margin-bottom: 17px;
    margin-right: 32px;
  }

  .leftGoods-nav {
    width: 554px;
    height: 514px;
    display: inline-block;
    position: relative;
    vertical-align: top;
    margin-right: 15px;
    overflow: hidden;

    .leftGoods-Img {
      width: 554px;
      height: 514px;
    }
  }

  .rightGoods-nav {
    width: 571px;
    height: 515px;
    display: inline-block;
    font-size: 0;
  }

  .right-goods {
    width: 278px;
    height: 250px;
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    float: left;
  }

  .right-goods:nth-child(odd) {
    margin-right: 15px;
  }

  .rightImg {
    width: 278px;
    height: 250px;
  }

  .goods-price {
    width: 110px;
    height: 44px;
    line-height: 44px;
    display: inline-block;
    background-image: url('../../../assets/index.png');
    background-position: -308px -15px;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    color: #333;
    font-style: italic;
    position: absolute;
    bottom: 28px;
    right: 0;
  }

  .goods-carousel {
    margin-top: 81px;
    font-size: 0;

    h2 {
      display: inline-block;
      font-size: 28px;
      margin-bottom: 17px;
    }

    ul {
      transform: translateX(0);
      display: inline-block;
      white-space: nowrap;
      transition: all 0.3s ease;
    }

    .title-nav {
      box-sizing: border-box;
      height: 20px;
      line-height: 20px;
      font-size: 14px;
      color: #333;
      display: inline-block;
      margin-right: 42px;
      border-bottom: 2px solid transparent;
      cursor: pointer;
    }

    .active, .title-nav:hover {
      border-color: #24bb78;
      color: #24bb78;
    }
  }

  .more-goods {
    font-size: 14px;
    margin-top: 16px;
    float: right;
    color: #777;
    cursor: pointer;
  }

  .arrow {
    display: inline-block;
    width: 7px;
    height: 12px;
    background-image: url('../../../assets/index.png');
    background-position: -209px -26px;
  }

  .carousel-content {
    background-color: #fff;
    width: 1140px;
    overflow: hidden;
    height: 360px;
    margin-bottom: 30px;
  }

  .goodsMask-wrap {
    opacity: 0;
    height: 223px;
    width: 160px;
    position: absolute;
    top: 0;
    left: 0;
  }

  .left-arrow, .right-arrow {
    width: 42px;
    height: 42px;
    display: inline-block;
    background-image: url('../../../assets/index.png');
    margin-top: 159px;
    vertical-align: top;
  }

  .left-arrow {
    background-position: -8px -9px;
    float: right;
    margin-right: 30px;
  }

  .right-arrow {
    background-position: -60px -9px;
    margin-left: 30px;
    margin-right: 35px;
  }

  .left-arrow:hover {
    background-position: -9px -59px;
  }

  .right-arrow:hover {
    background-position: -61px -59px;
  }

  .carousel-wrap {
    width: 932px;
    height: 360px;
    display: inline-block;
    overflow: hidden;

    li {
      display: inline-block;
      width: 160px;
      height: 300px;
      font-size: 14px;
      margin-bottom: 27px;
      margin-top: 34px;
      position: relative;
      padding: 0 14px;

      .carousel-goodsImg {
        width: 160px;
        height: 223px;
      }

      .goods-title {
        font-size: 12px;
        margin-top: 8px;
        margin-bottom: 5px;
        color: #333;
        width: 160px;
        height: 38px;
        overflow: hidden;
        white-space: normal;
      }

      .price {
        min-width: 70px;
        box-sizing: border-box;
        height: 24px;
        display: inline-block;
        background: #fcdf39;
        position: relative;
        text-align: center;
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        padding: 0 10px;
        margin-top: 5px;
        color: #333;
      }

      .price:before {
        content: '';
        width: 0;
        height: 0;
        border-right: 7px solid #fff;
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
      }

      .del-price {
        display: inline-block;
        font-size: 12px;
        color: #999;
        font-style: italic;
        text-decoration: line-through;
      }
    }

    .mask {
      height: 223px;
      width: 160px;
      position: absolute;
      top: 0;
      left: 15px;
      background-color: #000;
      opacity: 0.7;
    }

    .mask-conent {
      width: 160px;
      left: 15px;
      position: absolute;
      text-align: center;

      div {
        margin-top: 56px;
      }

      .collect-icon, .cart-icon {
        width: 36px;
        height: 36px;
        opacity: 0;
        display: inline-block;
        background-image: url('../../../assets/index.png');
        background-position: -844px -403px;
        cursor: pointer;
        transform: translate(-50px);
      }

      .cartActive {
        background-position: -901px -403px;
      }

      .collect-icon {
        background-position: -844px -457px;
        margin-left: 20px;
        transform: translate(50px);
      }

      .collectActive {
        background-position: -901px -457px;
      }

      p {
        height: 30px;
        width: 100%;
        line-height: 30px;
        color: #fff;
        font-size: 12px;
        font-weight: 600;
        margin-top: 18px;
        margin-bottom: 22px;
        box-sizing: border-box;
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
      }

      button {
        padding: 0 10px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        background-color: #fcdf39;
        color: #333;
        font-size: 12px;
        font-weight: 600;
        border: none;
        transform: translateY(50px);
      }
    }

    li:hover .cart-icon, li:hover .collect-icon, li:hover .goodsMask-wrap, li:hover .mask-conent > button {
      opacity: 1;
      transform: translate(0);
      transition: all 0.5s;
    }
  }

  .goods-nav1-2 {
    font-size: 0;

    h2 {
      font-size: 28px;
    }

    margin-bottom: 17px;

    .left-goodsImg {
      width: 760px;
      display: inline-block;
      height: 515px;
      position: relative;
      vertical-align: top;
      margin-right: 16px;

      .left-goods {
        width: 760px;
        height: 515px;
      }

      .goods-price {
        width: 110px;
        height: 44px;
        line-height: 44px;
        display: inline-block;
        background-image: url('../../../assets/index.png');
        background-position: -117px -44px;
        text-align: center;
        font-size: 20px;
        font-weight: 900;
        color: #333;
        font-style: italic;
        position: absolute;
        bottom: 15px;
        right: 0;
      }
    }

    .right-goodsImg {
      width: 364px;
      height: 515px;
      display: inline-block;
    }

    .right-goods {
      width: 364px;
      height: 250px;
      display: inline-block;
      position: relative;
      margin-bottom: 15px;
      float: left;
      margin-top: 0;
    }

    .right-goods:last-child {
      margin-bottom: 0;
    }

    .rightGoods {
      width: 364px;
      height: 250px;
    }
  }

  .goods-nav0-3 {
    h2 {
      display: inline-block;
      font-size: 28px;
    }

    margin-bottom: 17px;

    ul {
      display: inline-block;

      .title-nav {
        box-sizing: border-box;
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: #333;
        display: inline-block;
        margin-right: 42px;
        border-bottom: 2px solid transparent;
        cursor: pointer;
      }

      .active, .title-nav:hover {
        border-color: #24bb78;
        color: #24bb78;
      }
    }

    .nav0-3-wrap {
      display: inline-block;
      position: relative;
      width: 370px;
      height: 540px;
      float: left;
    }

    .nav0-3-wrap:nth-child(2) {
      margin-left: 15px;
      margin-right: 15px;
    }

    .nav0-3-wrap:hover {
      margin-top: -4px;
      transition: margin-top 0.3s ease;
    }

    img {
      width: 370px;
      height: 540px;
    }
  }

  .go_carts {
    width: 100px;
    height: 70px;
    border-radius: 10px;
    position: fixed;
    bottom: 20px;
    right: 20px;
    text-align: center;
    z-index 2

    .cart-icon {
      width: 36px;
      height: 36px;
      margin-top: 15px;
      display: inline-block;
      background-image: url('../../../assets/index.png');
      background-position: -844px -403px;
      cursor: pointer;
    }

    .goods_num {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: #d0021b;
      position: absolute;
      right: 22px;
      top: 4px;
      text-align: center;
      color: #ffffff;
      line-height: 20px;
      font-size: 12px;
    }
  }
}
</style>
