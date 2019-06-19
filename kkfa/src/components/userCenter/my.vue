<template>
  <div class="user-wrap">
    <user-crumbs :crumbsName="crumbsName"></user-crumbs>
    <left-sidebar @pageName='sendCrunbs'></left-sidebar>
    <router-view></router-view>
    <button @click="sendCrunbs">123</button>
  </div>
</template>

<script>
import leftSidebar from './components/leftSidebar';
import userCrumbs from './components/userCrumbs';
import rightProfile from './components/rightProfile';
export default {
  name: 'userHomePage',
  data () {
    return {
      crumbsName: ''
    }
  },
  components: {
    leftSidebar,
    userCrumbs,
    rightProfile
  },
  methods: {
    sendCrunbs (patharg) {
      this.crumbsName = patharg
    }
  }
};
</script>

<style scoped>
.user-wrap {
  width: 1140px;
  margin: 0 auto;
  font-size: 0;
}
</style>
