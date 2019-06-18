<template>
  <div id="kkfa">
    <div class="crumbs">
      <router-link to="/">
        <span class="home-icon"></span>
      </router-link>
      <i>&nbsp;/&nbsp;</i>
      <p>User Center</p>
      <i>&nbsp;/&nbsp;</i>
      <p>My Profile</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userCrumbs'
};
</script>

<style scoped>
/* 面包屑样式 */
#kkfa .crumbs {
  width: 100%;
  margin: 20px 0;
}
.crumbs .home-icon {
  width: 16px;
  height: 14px;
  display: inline-block;
  background-image: url(../../../assets/index.png);
  background-position: -507px -123px;
  cursor: pointer;
}
.crumbs .home-icon:hover {
  background-position: -558px -124px;
}
.crumbs p,
.crumbs i {
  display: inline-block;
  vertical-align: top;
  font-size: 14px;
  color: #777;
}
</style>
