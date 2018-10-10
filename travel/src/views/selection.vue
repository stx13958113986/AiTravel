<template>
<div>
<tr-header></tr-header>
 <div class="flicker-example" data-block-text="false">
        <ul>
            <li data-background="images/selection/f1.jpg">
                <div class="flick-title">甄选旅程</div>
                <div class="flick-sub-text">陪你看更温暖的世界</div>
            </li>
            <li data-background="images/selection/f2.jpg">
                <div class="flick-title">甄选旅程</div>
                <div class="flick-sub-text">陪你看更精彩的世界</div>
            </li>
            <li data-background="images/selection/f3.jpg">
                <div class="flick-title">甄选旅程</div>
                <div class="flick-sub-text">陪你看更温暖的世界</div>
            </li>
            <li data-background="images/selection/f4.jpg">
                <div class="flick-title">甄选旅程</div>
                <div class="flick-sub-text">陪你看更精彩的世界</div>
            </li>
        </ul>
    </div>

    <div class="txt-box">
        <h1>看看我们的<span>甄选旅程</span></h1>
        <p>每一次行程,都由精心挑选设计,只为提供你最极致的旅行体验</p>
    </div>
    <div class="sel_bav">

        <div class="col-lg-4 col-md-6">
            <a href="/details">
                <div>
                    <img src="images/selection/m1.jpg" alt="">
                    <p class="p1">周边游</p>
                    <p class="p2">DOMESTIC TRAVEL</p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-md-6">
            <a href="/details">
                <div>
                    <img src="images/selection/m2.jpg" alt="">
                    <p class="p1">中东游</p>
                    <p class="p2">DOMESTIC TRAVEL</p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-md-6">
            <a href="/details">
                <div>
                    <img src="images/selection/m8.jpg" alt="">
                    <p class="p1">澳洲游</p>
                    <p class="p2">DOMESTIC TRAVEL</p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-md-6">
            <a href="/details">
                <div>
                    <img src="images/selection/m4.jpg" alt="">
                    <p class="p1">欧洲游</p>
                    <p class="p2">DOMESTIC TRAVEL</p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-md-6">
            <a href="/details">
                <div>
                    <img src="images/selection/m5.jpg" alt="">
                    <p class="p1">美洲游</p>
                    <p class="p2">DOMESTIC TRAVEL</p>
                </div>
            </a>
        </div>
        <div class="col-lg-4 col-md-6">
            <a href="/details">
                <div>
                    <img src="images/selection/m6.jpg" alt="">
                    <p class="p1">亚洲游</p>
                    <p class="p2">DOMESTIC TRAVEL</p>
                </div>
            </a>
        </div>
    </div>
<tr-footer></tr-footer>
</div>
</template>

<script>

import TrHeader from "@/components/TrHeader.vue"
import TrFooter from "@/components/TrFooter.vue"
import  "../lib/js/index.js";
import  "../lib/js/my_selection.js";
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
@import "../lib/css/selection.css";
@import "../lib/css/flickerplate.css";
</style>