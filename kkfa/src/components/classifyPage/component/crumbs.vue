<template>
    <div>
        <div class="crumbs-wrap">
            <span class="homePage-icon"></span>
            /
        </div>
        <div class="page-location">Best-Sellers</div>
    </div>
</template>

<script>
export default {
    name: 'crumbs'
}
</script>

<style scoped lang="stylus">
    .crumbs-wrap {
        color #999
        margin-bottom 20px
        display inline-block
        .homePage-icon {
            width 16px
            height 15px
            display inline-block
            background-image url(../../../assets/index.png)
            background-position: -203px -77px;
            cursor pointer
        }
    }
    .page-location {
        display inline-block
        color #333
    }
</style>
