<template>
  <div class="right">
    <h1>My rightNotifica</h1>
    <div style="height:300px;text-align:center;margin:250px; auto;font-size: 20px">Notifica暂无内容,静候皇上来临幸</div>
  </div>
</template>

<script>
export default {
  name: 'rightNotifica'
};
</script>

<style lang="stylus" scoped>
.right {
  width: 870px;
  min-height: 980px;
  background: #fff;
  display: inline-block;
  position: relative;
}

.right h1 {
  color: #333;
  font-size: 18px;
  padding-left: 24px;
  position: relative;
  font-weight: normal;
  margin: 20px 0 30px 0;
}

.right h1:before {
  content: '';
  width: 4px;
  height: 22px;
  background: #fcdf39;
  position: absolute;
  left: 0;
}
</style>

