!function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}({6:function(t,e){new Vue({el:"#main",data:()=>({lid:location.search.split("=")[1],list:[],pics:[{md:"",sm:""},{md:"",sm:""},{md:"",sm:""},{md:"",sm:""}]}),components:{},created(){this.getcontent()},methods:{getcontent(){console.log("lid="+this.lid);var t="details/search?lid="+this.lid;this.$http.get(t).then(t=>{console.log(t),this.pics=t.body.pics,this.list=t.body.product})},buy(){var t="details/buy?lid="+this.lid;this.$http.get(t).then(t=>{console.log(t),1==t.data.ok?alert("添加成功"):-1==t.data.ok?alert("你已经添加到订单"):alert("请先登录!")})}}}),$("#smImg").on("mouseover","img",function(){var t=$(this);t.css("cursor","pointer");var e=t.attr("data-lg");$("#example").attr("src",e)}),$("#ai").click(function(){"./images/details/ai-1.png"==$("#ai").attr("src")?$("#ai").attr("src","./images/details/ai-2.png"):$("#ai").attr("src","./images/details/ai-1.png")})}});