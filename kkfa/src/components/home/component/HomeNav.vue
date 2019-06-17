<template>
  <div class="nav">
    <div class="nav-content">
      <ul>
        <li>
          <a href>
            <span class="uplay-icon"></span>
            <span class="nav-text">UPLAY</span>
          </a>
        </li>
        <li>
          <a href>
            <span class="playstat-icon"></span>
            <span class="nav-text">PLAYSTATION</span>
          </a>
        </li>
        <li>
          <a href>
            <span class="plus-icon"></span>
            <span class="nav-text">PLUS+</span>
          </a>
        </li>
        <li>
          <a href>
            <span class="pc-icon"></span>
            <span class="nav-text">PC</span>
          </a>
        </li>
        <li>
          <a href>
            <span class="origin-icon"></span>
            <span class="nav-text">ORIGIN</span>
          </a>
        </li>
        <li>
          <a href>
            <span class="steam-icon"></span>
            <span class="nav-text">STEAM</span>
          </a>
        </li>
        <li>
          <a href>
            <span class="gift-icon"></span>
            <span class="nav-text">GIFT CARDS</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homeNav'
};
</script>

<style scoped lang="stylus">
.nav {
  width: 100%;
  background-color: #000;

  .nav-content {
    width: 1140px;
    margin: 0 auto;

    ul {
      font-size: 0;
      display: flex;
      flex-wrap: nowrap;
      flex-direction: row;
      justify-content: space-between;

      li {
        display: inline-block;
        box-sizing: border-box;
        height: 60px;
        line-height: 60px;
        cursor: pointer;
        padding: 0 10px;

        .uplay-icon, .playstat-icon, .plus-icon, .pc-icon, .origin-icon, .steam-icon, .gift-icon {
          display: inline-block;
          background-image: url('../../../assets/index.png');
          vertical-align: top;
        }

        .uplay-icon {
          width: 38px;
          height: 30px;
          background-position: -29px -115px;
          margin-top: 16px;
        }

        .playstat-icon {
          width: 36px;
          height: 30px;
          background-position: -32px -185px;
          margin-top: 14px;
        }

        .plus-icon {
          width: 34px;
          height: 28px;
          background-position: -34px -255px;
          margin-top: 16px;
        }

        .pc-icon {
          width: 30px;
          height: 27px;
          background-position: -38px -323px;
          margin-top: 17px;
        }

        .origin-icon {
          width: 26px;
          height: 34px;
          background-position: -42px -390px;
          margin-top: 14px;
        }

        .steam-icon {
          width: 38px;
          height: 25px;
          background-position: -36px -464px;
          margin-top: 16px;
        }

        .gift-icon {
          width: 34px;
          height: 31px;
          background-position: -42px -529px;
          margin-top: 16px;
        }

        .nav-text {
          font-size: 18px;
          font-weight: 500;
          color: #fff;
          margin-left: 4px;
        }
      }
    }
  }
}
</style>
