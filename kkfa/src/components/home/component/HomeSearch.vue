<template>
  <div class="searchbox-wrap">
    <div class="search-box">
      <router-link to="/">
        <span class="kkfa-icon"></span>
      </router-link>
      <div class="search-wrap">
        <form>
          <input type="text" name>
          <button>SEARCH</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSearch'
};
</script>

<style lang="stylus" scoped>
.searchbox-wrap {
  width: 100%;
  height: 110px;
  background-color: #fff;

  .search-box {
    width: 1140px;
    margin: 0 auto;
    height: 50px;
    padding: 25px 0 35px 0;

    .kkfa-icon {
      cursor: pointer;
      margin-left: 59px;
      margin-right: 95px;
      width: 134px;
      height: 23px;
      display: inline-block;
      margin-top: 10px;
      background-image: url('../../../assets/kkfa.png');
    }

    .search-wrap {
      display: inline-block;
      width: 568px;
      vertical-align: top;
      font-size: 0;

      input {
        width: 480px;
        height: 50px;
        line-height: 50px;
        font-size: 14px;
        box-sizing: border-box;
        padding-left: 30px;
        padding-right: 30px;
        border: 3px solid #0cb46a;
        border-top-left-radius: 200px;
        border-bottom-left-radius: 200px;
      }

      button {
        width: 88px;
        height: 50px;
        box-sizing: border-box;
        border: none;
        color: #fff;
        font-size: 16px;
        background-color: #0cb46a;
        border-top-right-radius: 200px;
        border-bottom-right-radius: 200px;
        vertical-align: top;
      }
    }
  }
}
</style>
