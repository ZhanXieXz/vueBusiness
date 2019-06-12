<template>
  <div>
    <home-banner :banner="banner"></home-banner>
    <home-middle-goods 
      :tuiguang="tuiguang" 
      :swiper="swiper"
      :products1="products1"
      :products2="products2"
      :footerBanner="footerBanner"
      :footer="footer"
    ></home-middle-goods>
    <login-box></login-box>
  </div>
</template>

<script>
import HomeBanner from './component/HomeBanner';
import HomeMiddleGoods from './component/HomeMiddleGoods';
import loginBox from '../login/loginBox';
export default {
  name: "home",
  data () {
    return {
      banner: [],
      tuiguang: [],
      swiper: [],
      products1: [],
      products2: [],
      footerBanner: [],
      footer: [],
    }
  },
  components: {
    HomeBanner,
    HomeMiddleGoods,
    loginBox
  },
  methods: {
    getData () {
      this.axios.get('static/home/home.json').then(this.handleData)
    },
    handleData (res) {
      if (res.data) {
        var data = res.data;
        this.banner = data.banner;
        this.tuiguang = data.tuiguang;
        this.swiper = data.swiper;
        this.products1 = data.products1;
        this.products2 = data.products2;
        this.footer = data.footer;
        this.footerBanner = data.footerBanner;
      }        
    }
  },
  mounted: function() {
    this.getData()
  }
};
</script>

<style>
</style>
