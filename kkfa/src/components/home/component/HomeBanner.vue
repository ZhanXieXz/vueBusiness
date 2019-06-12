<template>
  <div class="banner-nav">
    <div class="banner-wrap">
      <div class="banner-img">
        <swiper :options="swiperOption" class="swiper-wrap" v-if="banner.length">
            <swiper-slide v-for="img in banner" :key="img.id" >
              <img :src=img.image class="swiper-img" @click="goodsPageShow(img)">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "HomeBanner",
    props: {
      banner: Array,
    },
    data () {
        return {
            swiperOption: {
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable: true
            }
        };
    },
    methods: {
      goodsPageShow (items) {
        this.$router.push({name: 'goodsDetails',params: {id: items.id}})
      }
    }
};
</script>

<style scoped lang="stylus">
    .banner-img >>> .swiper-pagination-bullet
        width: 20px
        height: 20px
        display: inline-block
        cursor: pointer
        background: #fff
        border-radius: 50%
        margin-right: 16px
        opacity 1
    .banner-img >>> .swiper-pagination-bullet-active
        width: 42px 
        border-radius: 10px
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5)
        background-color: #24bb78
.banner-wrap {
  height: 330px;
  position: relative;

  .banner-img {
    width: 1600px;
    margin: 0 auto;
    overflow: hidden;
    background: #f5f5f5;
        .swiper-img {
          height: 330px;
          width: 1600px;
        }
      }
    }
</style>
