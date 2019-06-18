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
import pageHeader from './components/home/component/HomeHeader';
import HomeNav from './components/home/component/HomeNav';
import HomeSearch from './components/home/component/HomeSearch';
import pageFooter from './components/home/component/HomeFooter';
export default {
  name: 'kkfa',
  components: {
    pageHeader,
    HomeNav,
    HomeSearch,
    pageFooter
  },
  mounted() {
    document.getElementsByTagName('body')[0].onclick = function(e) {
      const arrs = ['富强', '民主', '文明', '和谐', '自由', '平等', '公正', '法治', '爱国', '敬业', '诚信', '友善'];
      let $color = '';
      function randoms() {
        let aColor = '#';
        const aStr = '0123456789abcdef';
        for (let i = 0; i < 6; i++) {
          aColor += aStr[Math.floor(Math.random() * 10)];
        }
        $color = aColor;
      }
      randoms();
      const $i = document.createElement('span');
      $i.innerHTML = arrs[Math.floor(Math.random() * 12)];
      const x = e.pageX;
      const y = e.pageY;
      let oy = y - 30;
      let opacity = 1;
      $i.setAttribute(
        'style',
        'position: absolute; top: ' + (y - 30) + 'px; left: ' + x + 'px; z-index: 100; font-weight: bold;color: ' + $color + ''
      );
      document.getElementsByTagName('body')[0].appendChild($i);
      let timer = null;
      timer = setInterval(function() {
        oy -= 10;
        opacity -= 0.1;
        $i.setAttribute(
          'style',
          'position: absolute; top: ' +
            oy +
            'px; left: ' +
            x +
            'px; z-index: 100; font-weight: bold;color: ' +
            $color +
            ';opacity:' +
            opacity +
            ';transition: top .3s ease'
        );
      }, 100);
      setTimeout(function() {
        clearInterval(timer);
        $i.remove();
      }, 1000);
    };
  }
};
</script>

<style>
#kkfa {
  background-color: #f5f5f5;
}
</style>
