<template>
  <div id="kkfa">
    <page-header></page-header>
    <home-search></home-search>
    <home-nav></home-nav>
    <router-view/>
    <page-footer></page-footer>
  </div>
</template>

<script>
import pageHeader from './components/home/component/HomeHeader'
import HomeNav from './components/home/component/HomeNav' 
import HomeSearch from './components/home/component/HomeSearch'
import pageFooter from './components/home/component/HomeFooter'
export default {
  name: 'kkfa',
  components: {
    pageHeader,
    HomeNav,
    pageFooter,
    HomeSearch
  }
}
</script>

<style>
#kkfa {
  background-color: #f5f5f5
}
</style>
