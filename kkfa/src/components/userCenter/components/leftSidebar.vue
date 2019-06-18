<template>
  <div class="left">
    <div class="user-photo">
      <div>
        <img src="../../../assets/lazy.png" alt class="user-img">
        <div class="edit btns">
          <span class="icon icon-edit"></span>
          <input type="file" class="file-ipt" onchange="avatarFileOnchange(this)">
        </div>
      </div>
      <p>kkfa.com</p>
    </div>
    <div>
      <!-- 添加class="active"激活 -->
      <ul class="sidebar-list">
        <li class="sidebar-item active">
          <span class="icon icon-profile"></span>
          <p>My Profile</p>
        </li>
        <li class="sidebar-item">
          <span class="icon icon-security"></span>
          <p>Account Security</p>
        </li>
        <li class="sidebar-item">
          <span class="icon icon-orders"></span>
          <p>My Purchased Orders</p>
        </li>
        <li class="sidebar-item">
          <span class="icon icon-collection"></span>
          <p>My Collection</p>
        </li>
        <li class="sidebar-item">
          <span class="icon icon-notification"></span>
          <p>My Notification</p>
        </li>
        <li class="sidebar-item">
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
      a: 1
    };
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
</style>
