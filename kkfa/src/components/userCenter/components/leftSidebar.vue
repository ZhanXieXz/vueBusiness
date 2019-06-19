<template>
  <div class="left">
    <div class="user-photo">
      <div>
        <img :src="headImg" alt class="user-img">
        <div class="edit btns">
          <span class="icon icon-edit"></span>
          <input type="file" class="file-ipt" @change="upUserHeadImg($event)" id="file">
        </div>
      </div>
      <p>kkfa.com</p>
    </div>
    <div>
      <!-- 添加class="active"激活 -->
      <ul class="sidebar-list">
        <li class="sidebar-item" :class="{active: name == 1}" @click="myTogglePage('',$event,1)">
          <span class="icon icon-profile"></span>
          <p>My Profile</p>
        </li>
        <li
          class="sidebar-item"
          :class="{active: name == 2}"
          @click="myTogglePage('security',$event,2)"
        >
          <span class="icon icon-security"></span>
          <p>Account Security</p>
        </li>
        <li
          class="sidebar-item"
          :class="{active: name == 3}"
          @click="myTogglePage('orders',$event,3)"
        >
          <span class="icon icon-orders"></span>
          <p>My Purchased Orders</p>
        </li>
        <li
          class="sidebar-item"
          :class="{active: name == 4}"
          @click="myTogglePage('collection',$event,4)"
        >
          <span class="icon icon-collection"></span>
          <p>My Collection</p>
        </li>
        <li
          class="sidebar-item"
          :class="{active: name == 5}"
          @click="myTogglePage('notification',$event,5)"
        >
          <span class="icon icon-notification"></span>
          <p>My Notification</p>
        </li>
        <li
          class="sidebar-item"
          :class="{active: name == 6}"
          @click="myTogglePage('ticket',$event,6)"
        >
          <span class="icon icon-ticket"></span>
          <p>My Ticket</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leftSidebar',
  data() {
    return {
      name: 1,
      headImg: require('../../../assets/lazy.png')
    };
  },
  methods: {
    myTogglePage(patharg, e, num) {
      this.$router.push({ path: '/user/' + patharg + '' });
      this.name = num;
      this.$emit('pageName', patharg);
    },
    upUserHeadImg (e) {
      const file = e.target.files[0];
      this.headImg = window.URL.createObjectURL(file)
    }
  },
  mounted() {
    const locationPage = this.$route.name;
    const pageNum = this.$route.params.id | 1;
    console.log(locationPage);
    this.name = pageNum;
    switch (locationPage) {
      case 'profile':
        this.name = 1;
        break;
      case 'security':
        this.name = 2;
        break;
      case 'orders':
        this.name = 3;
        break;
      case 'collection':
        this.name = 4;
        break;
      case 'notification':
        this.name = 5;
        break;
      case 'ticket':
        this.name = 6;
        break;
    }
  }
};
</script>

<style lang="stylus" scoped>
.left {
  width: 250px;
  min-height: 980px;
  background: #fff;
  display: inline-block;
  margin-right: 20px;
  vertical-align: top;
}

.left .user-photo {
  width: 120px;
  margin: 0 auto;
  position: relative;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 30px;
}

.user-photo div {
  position: relative;
}

.user-photo .user-img {
  display: inline-block;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #f2f2f2;
}

.user-photo .edit {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #24bb78;
  position: absolute;
  right: 6px;
  bottom: 8px;
  cursor: pointer;
}

.user-photo .file-ipt {
  width: 25px;
  height: 25px;
  position: absolute;
  right: 0;
  bottom: -2px;
  opacity: 0;
  z-index: 1;
}

.user-photo p {
  font-size: 18px;
  color: #333;
}

.left .sidebar-item {
  width: 250px;
  height: 50px;
  box-sizing: border-box;
  padding-left: 15px;
  font-size: 14px;
  color: #333;
  line-height: 50px;
  border-left: 4px solid transparent;
  cursor: pointer;
}

.left .sidebar-item:hover {
  color: #24bb78;
}

.sidebar-item p .sub-num {
  width: auto;
  min-width: 12px;
  height: 12px;
  line-height: 12px;
  padding: 3px;
  border-radius: 50%;
  font-size: 12px;
  background: #20A76B;
  color: #fff;
  position: absolute;
  right: -15px;
  top: 6px;
  text-align: center;
}

.sidebar-item p {
  display: inline-block;
  position: relative;
}

.left .sidebar-list .active {
  color: #24bb78;
  position: relative;
  border-color: #24bb78;
}

.active .icon-profile {
  background-position: -253px -120px;
}

.active .icon-security {
  background-position: -254px -190px;
}

.active .icon-orders {
  background-position: -254px -259px;
}

.active .icon-collection {
  background-position: -251px -325px;
}

.active .icon-notification {
  background-position: -252px -393px;
}

.active .icon-ticket {
  background-position: -253px -467px;
}
</style>
