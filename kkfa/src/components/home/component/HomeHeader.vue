<template>
  <div>
    <div id="kkfa-header">
      <div class="header-container clearfix">
        <div class="header-left">
          <ul>
            <li>
              <router-link to="/">首页</router-link>
            </li>
            <li>
              <router-link to="/">我的订单</router-link>
            </li>
          </ul>
        </div>
        <div class="header-right">
          <ul>
            <li class="head-login" @click="login()">登录</li>
            <li class="register">
              <a href>注册</a>
            </li>
            <li>
              <a @click="pushOrderCenter">订单中心</a>
            </li>
            <li>
              <router-link to="/user">用户中心</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  methods: {
    login() {
      if (this.$store.state.cart.user_token) {
        alert('你已登录');
      } else {
        document.getElementsByClassName('login-wrap')[0].style.display = 'block';
      }
    },
    pushOrderCenter() {
      this.$router.push({ name: 'orders', params: { id: 3 }})
    }
  }
};
</script>

<style lang="stylus" scoped>
#kkfa-header {
  width: 100%;
  height: 32px;
  background-color: #f2f2f2;

  .header-container {
    width: 1230px;
    margin: 0 auto;
  }

  .header-left {
    float: left;
    height: 32px;
  }

  .header-right {
    float: right;
    height: 32px;
  }

  ul {
    font-size: 0;

    li {
      display: inline-block;
      font-size: 12px;
      height: 32px;
      cursor: pointer;

      a {
        position: relative;
        display: block;
        height: 12px;
        line-height: 12px;
        margin-top: 10px;
        padding: 0 24px;
        border-right: 1px solid #cdcdcd;
        color: #333;
      }
    }

    li:hover, li:hover a {
      color: #0cb46a;
    }

    li:first-child a {
      padding-left: 0;
    }

    li:last-child a {
      border: none;
    }
  }

  .clearfix:after {
    content: '';
    display: block;
    overflow: hidden;
    clear: both;
    width: 0;
    height: 0;
  }
}
</style>