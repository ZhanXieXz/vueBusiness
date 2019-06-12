<template>
    <div class="login-wrap">
        <div class="mask"></div>
        <div class="login-box">
            <div class="header">
                <h2>Welcome to kkfa Sign In.</h2>
                <div class="close-wrap" @click="closeBox">
                    <span class="close">x</span>
                </div>
            </div>
            <div class="form-wrap">
                <form action="">
                    <div class="input-wrap">
                        <p>Email Address</p>
                        <label for="" class="user-icon"></label>
                        <input type="text" id="user_name" class="user-input" placeholder="">
                    </div>
                    <div class="input-wrap">
                        <p>Password</p>
                        <label for="" class="password-icon"></label>
                        <input type="text" id="pass_word" class="user-input" placeholder="">
                    </div>
                    <div class="input-wrap">
                        <input id="remember-password" type="checkbox">
                        <label for="remember-password" style="cursor:pointer">Keep Me Logged In</label>
                    </div>
                    <button @click="login()">sign in</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "loginBox",
    methods: {
        login () {
            var user_name = document.getElementById("user_name").value,
                pass_word = document.getElementById("pass_word").value;
            if (user_name == "" || pass_word == "") {
                alert("账号或密码不能为空")
            } else {
                this.axios.get('../../static/user/user.json').then((ret)=> {
                    var data = ret.data;
                    if(data.states == 1) {
                        for (let i = 0; i < data.user.length; i++) {
                            if (user_name == data.user[i].user_name && pass_word == data.user[i].password) {
                               document.getElementsByClassName("login-wrap")[0].style.display = "none"
                               this.$store.commit('login',data.user[i].token)
                            }
                            document.getElementsByClassName("head-login")[0].innerHTML = data.user[i].user_name
                        }
                    }
                })
            }
        },
        closeBox () {
            document.getElementsByClassName("login-wrap")[0].style.display = "none"
        }
    }
}
</script>

<style scoped lang="stylus">
    .login-wrap {
        display none
        width 100%
        height 100%
        position fixed
        top 0
        left 0
        right 0
        bottom 0
        z-index 10
        .mask{
            width 100%
            height 100%
            background-color #000
            opacity 0.7
        }
        .login-box {
            width 520px
            background-color #ffffff
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
            padding 20px 0 0 20px
            box-sizing border-box
            .header {
                width 100%
                height 50px
                font-size 24px
                font-weight bold
                .close-wrap {
                    background-color #0cb46a
                    width 50px
                    height 50px
                    position absolute
                    right 0
                    top 0
                    .close {
                        width 30px
                        height 30px
                        line-height 30px
                        display block
                        font-size 30px
                        color #fff
                        text-align center
                        margin 10px
                    }
                }
                .close-wrap:hover .close{
                    transform rotate(180deg)
                    transition transform .8s
                }
            }
            .form-wrap {
                margin-right 20px
                .input-wrap {
                    margin-bottom 20px;
                    position relative
                    .user-input {
                        width 100%
                        box-sizing border-box
                        padding 10px 0 10px 40px
                        border 1px solid #f0f0f0
                        margin-top 10px
                    }
                    .user-icon,.password-icon {
                        width 16px
                        height 17px
                        display inline-block
                        background-image url(../../assets/index.png)
                        background-position -507px -389px
                        position absolute
                        top 34px 
                        left 10px
                    }
                    .password-icon {
                        background-position -507px -460px
                    }
                    #remember-password {
                        width 20px
                        height 20px
                        display inline-block
                        background-color #0cb46a
                        border-radius 10px
                    }
                    input[type="checkbox"] + label::before {
                        content: "\a0" 
                        display: inline-block
                        width: 20px
                        height: 20px
                        margin-right: 10px
                        border-radius: 10px
                        background-color: silver
                        text-indent: 5px
                        line-height: 20px
                    }
                    input[type="checkbox"]:checked + label::before {
                        content: "\2713"
                        background-color: #0cb46a
                        color #fff
                    }
                    #remember-password {
                        position: absolute
                        clip: rect(0, 0, 0, 0)
                    }
                }
                button {
                    width 100%
                    height 50px
                    font-size 20px
                    background-color #0cb46a
                    color #fff;
                    margin-bottom 50px
                    cursor pointer
                }
            }
        }
    }
</style>
