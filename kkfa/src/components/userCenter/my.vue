<template>
  <div class="user-wrap">
    <user-crumbs></user-crumbs>
    <left-sidebar></left-sidebar>
    <router-link to="/user/profile">123</router-link>
  </div>
</template>

<script>
import leftSidebar from './components/leftSidebar';
import userCrumbs from './components/userCrumbs';
import rightProfile from './components/rightProfile';
export default {
  name: 'userHomePage',
  components: {
    leftSidebar,
    userCrumbs,
    rightProfile
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
