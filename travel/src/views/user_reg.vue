<template>
    <div class="container-login" style="background-image: url('images/user_reg/1.jpg');">
        <form id="form-register" action="http://127.0.0.1:3000/users/go" method="post">
        <div class="wrap-login">
            <div class="login-form">
                    <span class="login-form-title">欢迎注册</span>
                <span class="check"></span>
               <div class="wrap-input validate-input" data-validate="请输入用户名">
                    <input class="input" type="text" name="uname" id="uname" placeholder="您的新用户名" autocomplete="off">  
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                        <i class="fa fa-user"></i>
                    </span>
                  
                </div>
                <div class="wrap-input validate-input" data-validate="请输入密码">
                    <input class="input" type="password" name="upwd" id="upwd" placeholder="请输入密码">
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                        <i class="fa fa-lock"></i>
                    </span>
                </div>
                <span class="check_pwd"></span>
                <div class="wrap-input validate-input" data-validate="请输入密码">
                        <input class="input" type="password" name="upwdconfirm" id="upwdconfirm" placeholder="重复密码">
                        <span class="focus-input"></span>
                        <span class="symbol-input">
                            <i class="fa fa-lock"></i>
                        </span>
                    </div>
                <div class="container-login-form-btn">
                  <input type="button" class="login-form-btn" id="reg" value="注册">
                </div>
            </div>
        </div>
        </form>
    </div>
</template>
<script>
import  "../lib/js/user_reg.js";
  export default{
    data(){
      return {  
      }
    },
    components:{
    },
    created(){
        
    },
    methods:{
       
    }
  }
</script>
<style lang="css" scoped>
@import "../lib/css/user_reg.css";
@import "../lib/fonts/font-awesome-4.7.0/css/font-awesome.min.css";
</style>