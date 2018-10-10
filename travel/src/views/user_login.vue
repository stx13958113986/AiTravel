<template>
<div>
<div class="container-login" style="background-image: url('images/user_login/img-02.jpg');">
        <div class="wrap-login">
            <div class="login-form">
                <div class="login-form-avatar">
                    <img src="images/user_login/avatar-01.jpg" alt="AVATAR">
                </div>

                <span class="login-form-title">欢迎回来</span>

                <div class="wrap-input validate-input" data-validate="请输入用户名">
                    <input class="input" type="text" name="uname" id="uname" placeholder="用户名" autocomplete="off" v-model="uname">
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
                <span id="err1"></span>

                <div class="wrap-input validate-input" data-validate="请输入密码">
                    <input class="input" type="password" name="upwd" id="upwd" placeholder="密码" v-model="upwd">
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                        <i class="fa fa-lock"></i>
                    </span>
                </div>

                <div class="container-login-form-btn">
                  <button class="login-form-btn-l" @click="login()">登 录</button>
                </div>

                <div class="forget_pwd">
                    <a href="user_reg.html" class="txt1" target="_blank">忘记密码？</a>
                </div>

                <div class="reg">
                    <a class="txt1" href="user_reg.html" target="_blank">
                        立即注册
                        <i class="fa fa-long-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</template>

<script>
import qs from "qs"

  export default{
    name:"login",
    data(){
      return {
        uname:"",
        upwd:""
      }
    },
    methods:{
      login(){
        var self=this;
        this.$http.post(
          "http://localhost:3000/users/signin",qs.stringify({
            uname:self.uname,upwd:self.upwd
          })
        ).then(res=>{
          if(res.data.ok==1){
            alert("登录成功，返回首页");
            window.location = "http://127.0.0.1:3001/";
          }else{
            alert("用户名或密码错误！");
          }
        })
      }
    }
  }
</script>
<style lang="css" scoped>
@import "../lib/css/user_login.css";
@import "../lib/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
</style>