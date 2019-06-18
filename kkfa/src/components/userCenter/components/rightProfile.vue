<template>
  <div class="right">
    <h1>My Profile</h1>
    <div class="right-content">
      <div>
        <div class="email-verifica clearfix">
          <p class="mail">1233211234567@gmail.com</p>
          <div class="settings-email">
            <p>E-mail Verification</p>
            <p>Edit Login Password</p>
          </div>
        </div>
        <div class="phone-verifica clearfix">
          <span class="subtitle">Mobile Phone</span>
          <span>none</span>
          <div class="settings">
            <p>Mobile Phone Verification</p>
          </div>
        </div>
        <div class="login-time">
          <span class="subtitle">Your last login time</span>
          <p>2019 / 04 / 23</p>
        </div>
        <div class="security-index clearfix low">
          <!-- 修改security2的宽度以及颜色控制密码强度 -->
          <span class="subtitle">Security Index</span>
          <div class="security">
            <span class="security1"></span>
            <span class="security2"></span>
          </div>
          <span class="security-lv">Low</span>
          <div class="settings">
            <p>Setting</p>
          </div>
        </div>
      </div>
      <div>
        <div class="msg-wrp">
          <span class="subtitle">First Name</span>
          <input type="text" class="user-msg">
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Last Name</span>
          <input type="text" class="user-msg">
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Birthday</span>
          <div class="date">
            <select name id>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>
            <select name id>
              <option value="31">31</option>
              <option value="31">30</option>
              <option value="31">29</option>
              <option value="31">28</option>
              <option value="31">27</option>
              <option value="31">26</option>
              <option value="31">25</option>
              <option value="31">24</option>
            </select>
            <select name id>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
            </select>
          </div>
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Gender</span>
          <div class="gender male">
            <div class="man js-genders">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="js-g">Male</span>
            </div>
            <div class="women js-genders">
              <span class="circle1"></span>
              <span class="circle2"></span>
              <span class="js-g">Female</span>
            </div>
          </div>
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Mobile Phone</span>
          <input type="text" class="user-msg">
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Instant Messenger</span>
          <input type="text" class="user-msg">
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Skype</span>
          <input type="text" class="user-msg">
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Country</span>
          <input type="text" class="user-msg">
        </div>
        <div class="msg-wrp">
          <span class="subtitle">Address</span>
          <textarea wrap="virtual" class="user-import"></textarea>
        </div>
      </div>
      <div class="save-wrp">
        <button class="save-btn btns">Save Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'rightProfile'
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

.right .right-content {
  padding: 0 24px;
  font-size: 0;
}

.right-content span {
  font-size: 14px;
}

.right-content .settings-email {
  float: right;
  margin-right: 85px;
}

.right-content .settings {
  float: right;
  margin-right: 269px;
}

.email-verifica p, .phone-verifica p, .security-index p {
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

.email-verifica .mail {
  width: auto;
  color: #333;
  font-size: 18px;
  font-weight: bold;
  background: #fff;
  cursor: auto;
}

.email-verifica p:nth-child(2) {
  margin: 0 0 25px 20px;
}

.email-verifica p:active, .phone-verifica p:active, .security-index p:active {
  background: #d9d9d9;
}

.right-content .phone-verifica {
  margin-bottom: 25px;
}

.right-content .subtitle {
  width: 130px;
  white-space: nowrap;
  text-align: right;
  font-size: 14px;
  color: #333;
  display: inline-block;
  margin-right: 30px;
}

.phone-verifica p {
  margin: 0;
}

.login-time p {
  color: #333;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 25px;
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

.middle .security .security2 {
  width: 66.6%;
  background: #fcdf39;
}

.high .security .security2 {
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
  font-size: 14px;
}

.right-content .user-msg:focus {
  border-color: #24bb78;
}

.right-content .msg-wrp {
  margin-bottom: 20px;
  font-size: 0;
}

.right-content .msg-wrp:first-child {
  margin-top: 20px;
}

.msg-wrp .gender, .msg-wrp .date {
  display: inline-block;
}

.msg-wrp .date {
  width: 245px;
  box-sizing: border-box;
  font-size: 0;
}

.msg-wrp .date select {
  width: 70px;
  height: 35px;
  border-radius: 4px;
  border: solid 1px #dcdcdc;
  background-color: #ffffff;
  color: #777;
  font-size: 14px;
}

.msg-wrp .date select:nth-child(2) {
  margin: 0 17px;
}

.gender .man, .gender .women {
  display: inline-block;
  cursor: pointer;
}

.gender .man {
  margin-right: 40px;
}

#kkfa .male .man .circle1, #kkfa .male .women .circle2, #kkfa .female .man .circle2, #kkfa .female .women .circle1 {
  display: none;
}

.msg-wrp .user-import {
  font-size: 14px;
  width: 385px;
  height: 70px;
  border-radius: 4px;
  border: solid 1px #dcdcdc;
  box-sizing: border-box;
  vertical-align: middle;
  padding: 5px 10px;
}

.right-content .save-wrp {
  display: inline-block;
  padding-left: 160px;
  text-align: center;
}

.save-wrp .save-btn {
  width: 160px;
  height: 40px;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 18px;
  text-align: center;
  line-height: 40px;
  border: none;
}
</style>
