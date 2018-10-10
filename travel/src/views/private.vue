<template>
<div>
<tr-header></tr-header>
 <div class="banner">
        <img src="images/privated/1.jpg" alt="">
    </div>
    <div class="private_main">
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p>您的姓名</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p> 预计人数</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p>联系方式</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p>每人预算</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p> 电子邮箱</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p>出行时间</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p>目的地</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p>出行天数</p>
            <input type="text">
        </div>
        <div class="col-lg-4 col-md-6 col-sm-12 child">
            <p>特别备注</p>
            <input type="text">
        </div>
        <div class="col-sm-12 child">
                <p>留言内容</p>
                <textarea name="" id="" cols="" rows="5"></textarea>
        </div>
        <div class="col-sm-12 child">
            <input type="submit" value="立即定制">
        </div>
    </div>

<tr-footer></tr-footer>
</div>
</template>

<script>

import TrHeader from "@/components/TrHeader.vue"
import TrFooter from "@/components/TrFooter.vue"
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
@import "../lib/css/base.css";
@import "../lib/css/private.css";
</style>