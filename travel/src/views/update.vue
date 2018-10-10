<template>
 <div class="container-login" style="background-image: url('images/update/1.jpg');">
        <div class="wrap-login">
            <div class="login-form">
                <div class="login-form-avatar">
                    <img src="images/user_login/avatar-01.jpg" alt="AVATAR">
                </div>

                <span class="login-form-title">个人信息</span>
                <div class="wrap-input validate-input" data-validate="">
                    <input class="input" type="text" name="username" placeholder="真实姓名" autocomplete="off">
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                        <i class="fa fa-user"></i>
                    </span>
                </div>
                <div class="wrap-input validate-input" data-validate="">
                    <input class="input" type="text" name="pass" placeholder="手机号">
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                        <i class="fa fa-lock"></i>
                    </span>
                </div>
                <div class="wrap-input validate-input" data-validate="">
                    <input class="input" type="text" name="pass" placeholder="家庭住址">
                    <span class="focus-input"></span>
                    <span class="symbol-input">
                        <i class="fa fa-lock"></i>
                    </span>
                </div>
                <div class="container-login-form-btn">
                  <button class="login-form-btn">确认</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>

  export default{
    data(){
      return {  
      }
    },
    components:{
      TrHeader,
      TrFooter
    },
    created(){
        
    },
    methods:{
    }
  }
</script>
<style lang="css" scoped>
@import "../lib/css/update.css";
</style>