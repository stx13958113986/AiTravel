<template>
<div style="background-image: url('images/about_us/4.jpg');">
<tr-header></tr-header>
<div class="banner-engine">

        <ul class="banner-ul clearfix" id="slider-back">
            <li class="banner-cloudapp"></li>
            <li class="banner-cps"></li>
            <li class="banner-trust"></li>
        </ul>
        <!-- 对应banner文字 -->
        <div class="slider-main">
            <div class="banner-text">
                <div class="slider-text" data-start_top="30" data-to_top="0" data-start_left="0" data-to_left="0">
                    <p class="banner-text1">高端旅游定制</p>
                    <p class=" banner-text2">你的旅游，你说的算！</p>
                </div>
            </div>
            <div class="banner-text">
                <div class="slider-text" data-start_top="30" data-to_top="0" data-start_left="0" data-to_left="0">
                    <p class="banner-text1">多快好省</p>
                    <p class=" banner-text2">多种选择,马上定制,朋友越多,价格越低</p>
                </div>
            </div>
            <div class="banner-text">
                <div class="slider-text" data-start_top="30" data-to_top="0" data-start_left="0" data-to_left="0">
                    <p class="banner-text1">加入我们</p>
                    <p style="line-height: 36px;" class=" banner-text2">让我们的心灵<br />一起去旅行</p>
                </div>
            </div>
        </div>
        <!-- banner索引 -->
        <div class="banner-point">
            <div class="auto">
                <ul class="banner-area" id="slider-btn">
                    <li class="active" data-delay="6000"></li>
                    <li data-delay="4000"></li>
                    <li data-delay="4000"></li>
                </ul>
            </div>
        </div>

    </div>
<div class="big-main">
    <div class="main">
        <p>网站介绍</p>
        <div class="work-intro">
            <div class="title">
                <h2 class="title-text"><span>about us</span></h2>
            </div>
        </div>
        <div class="work-main">
            <p>AI-Travel旅行社有限公司是一家在中国休闲旅游行业专业、领先的国际旅行管理机构，专注于为高端人士提供私人旅行休闲生活规划的定制服务，依托海外背景，我们用国际化、专业化的服务理念和出游解决方案重新诠释了个人旅行的涵义。针对用户个性化的需求为其量身定制个性化的旅游产品。我们以丰富的产品，满足用户对于不同旅游目的地、不同出游方式的需求，提供全新的旅行体验，改变传统的旅行生活方式。</p>
        <p>经过多年的发展， 公司建立起了涵盖度假休闲、人文观光、猎奇探险、主题运动、家庭计划、健康人生六大产品版块的主题旅行产品系列以及私人定制旅行服务版块，为用户提供全面的国内、出境、旅游线路，以及吃、住、行、购、娱等各类旅游产品咨询与定制服务的一站式旅行解决方案。恒众国际拥有深厚的旅游背景和独特的服务理念，倡导时尚旅游新概念，推出个性化产品，追求高品质服务，为渴望体验真正的旅游乐趣的人们打造舒适、理想的旅程。
            </p>
            <p>我们沿袭了国际成熟旅游市场的先进理念，充分发挥海外优势，凭借完善的服务体系、严谨的企业作风、时尚的品牌形象，成为多家媒体旅游产品的合作伙伴。严谨和创新是恒众国际始终坚守的企业信念，拥有覆盖全球近100个国家、超过300种服务于不同人群的高端旅游产品，同时始终以活跃的姿态、丰富的创意为公众奉献以旅游文化为核心的大型主题活动，我们一直在努力，希望成为时尚旅游生活方式的倡导者和领跑者。</p>
        </div>

        <p class="contact">联系方式</p>
        <div class="work-intro">
            <div class="title">
                <h2 class="title-text"><span>CONTACT US</span></h2>
            </div>
        </div>
        <div class="work-main row">
            <div class="col-md-6 col-sm-12">
                <div class="footer-item">
                 <img src="images/about_us/location.png" class="r_1" alt="">
                    <div>
                        <p>北京市朝阳区建国路XX号XXXX国贸大厦XXXXXX</p>
                    </div>
                </div>
                <div class="footer-item">
                    <img src="images/about_us/phone.png" class="r_2" alt="">
                       <div>
                           <p>咨询热线：010-5XXXX06 / 8517XXX47</p>
                           <p>咨询手机：135XXXXX985 / 18511XXXX67</p>
                           <p>客服中心：010-XXXX9737</p>
                       </div>
                   </div>
            </div>
            <div class="col-md-6  col-sm-12">
                <div class="footer-item">
                    <img src="images/about_us/ma.gif" alt="">
                </div>
            </div>
        </div>
    </div>
</div>
<tr-footer></tr-footer>
</div>
</template>

<script>

import TrHeader from "@/components/TrHeader.vue"
import TrFooter from "@/components/TrFooter.vue"
import  "../lib/js/about_us.js";
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
@import "../lib/css/about_us.css"; 
</style>