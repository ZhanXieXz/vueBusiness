<template>
  <div class="goodsClassify">
    <div class="title">
      Best-Sellers
      <span>({{classify.length}})</span>
    </div>
    <div class="rightBtn">
      <p>Select As :</p>
      <button class="active">All Stock</button>
      <button>In Stock</button>
    </div>
    <ul class="all-goods">
      <li v-for="items in classify" :key="items.id">
        <img v-lazy="items.image" alt>
        <span class="discounts" v-show="items.disconunts">{{items.disconunts}}%</span>
        <p>{{items.name}}</p>
        <div class="money">
          <span>USD {{items.price}}</span>
          <span class="del-money">USD {{items.oldPrice}}</span>
        </div>
        <div class="goods-mask">
          <div class="mask"></div>
          <div class="icon-wrap">
            <span class="cart-icon"></span>
            <span class="collect-icon"></span>
          </div>
          <p class="hint">Stock: In Stock</p>
          <button @click="goodsPageShow(items)">MORE DETAILS</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "goodsClassify",
  props: {
    classify: Array
  },
  methods: {
    goodsPageShow(items) {
      this.$router.push({ name: "goodsDetails", params: { id: items.id } });
    }
  }
};
</script>

<style scoped lang="stylus">
.goodsClassify {
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  .title {
    font-size: 18px;
    color: #050505;
    border-left: 4px solid #fed700;
    padding-left: 20px;
    margin: 20px 0;
    text-transform: capitalize;

    span {
      color: #666;
    }
  }

  .rightBtn {
    position: absolute;
    right: 0;
    top: 0;

    p {
      display: inline-block;
      vertical-align: -7px;
    }

    button {
      border: none;
      background-color: #ffffff;
      border: 1px solid #c8c8c8;
      border-radius: 10px;
      padding: 5px 10px;
      min-width: 105px;
      margin: 10px 20px 0 0px;
      text-align: center;
      cursor: pointer;
    }

    button:hover, .active {
      background-color: #0cb46a;
      border-color: #0cb46a;
      color: #fff;
    }
  }

  .all-goods {
    li {
      padding: 0 15px;
      width: 160px;
      height: 302px;
      display: inline-block;
      position: relative;

      img {
        display: block;
        max-width: 160px;
        height: 222px;
        float: left;
        margin-right: 6px;
        border-radius: 5px;
      }

      .discounts {
        background: #f66a78;
        border-radius: 32px;
        color: #fff;
        height: 30px;
        position: absolute;
        top: 5px;
        right: 20px;
        text-align: center;
        line-height: 32px;
      }

      p {
        width: 160px;
        height: 24px;
        font-size: 12px;
        color: #000000;
        margin: 3px;
        font-weight: bold;
        overflow: hidden;
        padding-top: 5px;
      }

      .money {
        margin-top: 4px;
        width: 100%;

        span {
          font-size: 14px;
          color: #ef7c00;
        }

        .del-money {
          font-size: 12px;
          color: #c4c4c4;
          text-decoration: line-through;
        }
      }
    }

    li:hover .goods-mask {
      opacity: 1;
      transition: opacity 0.5s;
    }

    li:hover .cart-icon, li:hover .collect-icon, li:hover button {
      opacity: 1;
      transform: translate(0);
      transition: all 0.5s;
    }
  }

  .goods-mask {
    opacity: 0;
    width: 160px;
    height: 222px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 15px;

    .mask {
      width: 100%;
      height: 100%;
      background: #000;
      opacity: 0.7;
      border-radius: 5px;
      position: absolute;
    }

    .icon-wrap {
      margin-top: 56px;

      .cart-icon, .collect-icon {
        width: 40px;
        height: 40px;
        opacity: 0;
        display: inline-block;
        background-image: url('../../../assets/index.png');
        background-position: -9px -156px;
        cursor: pointer;
        transform: translate(-50px);
      }

      .collect-icon {
        background-position: -105px -156px;
        margin-left: 20px;
        transform: translate(50px);
      }
    }

    .hint {
      height: 30px;
      width: 100%;
      line-height: 30px;
      color: #fff;
      font-size: 12px;
      font-weight: 600;
      margin-top: 18px;
      margin-bottom: 22px;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      border-top: 1px solid #fff;
      border-bottom: 1px solid #fff;
      position: relative;
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
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
    }
  }
}
</style>
