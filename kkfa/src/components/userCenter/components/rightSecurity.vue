<template>
  <div class="right">
    <h1>Account Security</h1>
    <p class="user-account">Your Account：1233211234567</p>
    <div class="security-index clearfix low">
      <!-- .low,.middle,high控制进度条，以及颜色 -->
      <span class="subtitle1">Security Index</span>
      <div class="security">
        <span class="security1"></span>
        <span class="security2"></span>
      </div>
      <span class="security-lv">Low</span>
    </div>
    <div class="right-content">
      <div class="security-wrap">
        <ul>
          <!-- .active激活状态 -->
          <li class="security-list active">
            <div>
              <span class="icon icon-password1"></span>
              <span class="icon icon-password2"></span>
            </div>
            <div>
              <div>
                <span class="handle-hint">Change Password</span>
                <span class="icon icon-succ"></span>
                <span class="icon icon-error"></span>
              </div>
              <p
                class="hint-text"
              >Change your password regularly to increase your account's protection.</p>
            </div>
            <div class="edit-btn">Edit Password</div>
          </li>
          <li class="security-list">
            <div>
              <span class="icon icon-email1"></span>
              <span class="icon icon-email2"></span>
            </div>
            <div>
              <div>
                <span class="handle-hint">Change Password</span>
                <span class="icon icon-succ"></span>
                <span class="icon icon-error"></span>
              </div>
              <p
                class="hint-text"
              >Please reset the password by verification via email if the password is forgotten or the account is stolen.</p>
            </div>
            <div class="edit-btn">E-mail Verification</div>
          </li>
          <li class="security-list">
            <div>
              <span class="icon icon-msg1"></span>
              <span class="icon icon-msg2"></span>
            </div>
            <div>
              <div>
                <span class="handle-hint">Change Password</span>
                <span class="icon icon-succ"></span>
                <span class="icon icon-error"></span>
              </div>
              <p
                class="hint-text"
              >Please retrieve the password by security question if the password is forgotten or the account is stolen.</p>
            </div>
            <div class="edit-btn">Modify security question</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'serurity'
};
</script>

<style  scoped lang="stylus">
.right {
  width: 870px;
  min-height: 980px;
  background: #fff;
  display: inline-block;
  position: relative;
  font-size 14px;
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
    content: "";
    width: 4px;
    height: 22px;
    background: #fcdf39;
    position: absolute;
    left: 0;
}
.right .right-content {
    padding: 0 24px;
    font-size: 0;
}
.security-index p {
    display: inline-block;
    width: 164px;
    height: 24px;
    text-align: center;
    color: #24bb78;
    font-size: 12px;
    background: #f0f0f0;
    border-radius: 4px;
    line-height: 24px;
    cursor: pointer;
    margin-bottom: 25px;
}
.security-index p:active {
    background: #d9d9d9;
}
.right-content .security-index {
    padding-bottom: 15px;
    border-bottom: 1px solid #dcdcdc;
}
.security-index .security {
    width: 144px;
    height: 10px;
    display: inline-block;
    position: relative;
    vertical-align: text-bottom;
}
.security .security1 {
    width: 144px;
    height: 10px;
    display: inline-block;
    border-radius: 6px;
    background: #d8d8d8;
    position: absolute;
}
.security .security2 {
    height: 10px;
    display: inline-block;
    border-radius: 6px;
    position: absolute;
}
.low .security .security2 {
    width: 33.3%;
    background: #e75b48;
}
.middle .security .security2{
    width: 66.6%;
    background: #fcdf39;
}
.high .security .security2{
    width: 100%;
    background: #24bb78;
}
.security-index .security-lv {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    margin-left: 10px;
    margin-right: 30px;
}
.low .security-lv {
    color: #e75b48;
}
.middle .security-lv {
    color: #fcdf39;
}
.high .security-lv {
    color: #24bb78;
}
.right-content .user-msg {
    width: 245px;
    height: 35px;
    border-radius: 4px;
    border: solid 1px #dcdcdc;
    background-color: #ffffff;
    box-sizing: border-box;
    padding: 0 10px;
    
}
.right .user-account {
    font-size: 14px;
    color: #333;
    font-weight: bold;
    padding-left: 24px;
    margin-bottom: 30px;
}
.right-content .security-wrap {
    margin-top: 50px;
}
.security-wrap .security-list {
    font-size: 14px;
    padding: 30px 0;
    border-bottom: 1px solid #dcdcdc;
}
.security-list div {
    display: inline-block;
    vertical-align: middle;
}
.security-list div:nth-child(2) {
    margin-left: 48px;
}
.security-list .handle-hint {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    color: #e75b48;
    margin: 0 10px 15px 0;
}
.security-wrap .active .handle-hint {
    color: #24bb78;
}
.security-list .hint-text {
    font-size: 12px;
    width: 375px;
    line-height: 1.42;
}
.security-list .edit-btn {
    width: 200px;
    height: 40px;
    border-radius: 4px;
    border: solid 1px #24bb78;
    box-sizing: border-box;
    font-size: 14px;
    color: #24bb78;
    background: #fff;
    text-align: center;
    line-height: 40px;
    float: right;
    margin-right: 40px;
    margin-top: 13px;
}
.security-list .edit-btn:hover {
    color: #fff;
    background: #24bb78;
    cursor: pointer;
}
.right .subtitle1 {
    font-size: 14px;
    color: #333;
    padding: 0 20px 0 24px;
}
.icon-password2,
.icon-email2,
.icon-msg2,
.icon-succ,
.active .icon-password1,
.active .icon-error,
.active .icon-email1,
.active .icon-msg1 {
  display: none;
}
.active .icon-password2,
.active .icon-succ,
.active .icon-email2,
.active .icon-msg2 {
  display: inline-block;
}
</style>
