<template>
    <div class="wrap">
        <crumbs></crumbs>
        <goods-classify :classify="data"></goods-classify>
    </div>
</template>

<script>
import crumbs from './component/crumbs'
import goodsClassify from './component/goodsClassify'
export default {
    name: 'classify',
    components: {
        crumbs,
        goodsClassify
    },
    data () {
        return {
            data: []
        }
    },
    created () {
        this.axios.get('./static/goods/goods.json').then((ret,err) => {
            this.data = ret.data.data;
        })
    }
}
</script>

<style scoped lang="stylus">
    .wrap {
        width 1140px
        margin 0 auto
        margin-top 20px;
    }
</style>
