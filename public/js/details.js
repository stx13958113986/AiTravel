new Vue({
    el:"#main",
    data() {
      return {
        lid: location.search.split("=")[1],
        list: [],
        pics:[
          {"md":"","sm":""},
        {"md":"","sm":""},
        {"md":"","sm":""},
        {"md":"","sm":""}
      ]
      };
    },
    components: {},
    created() {
      this.getcontent(); 
    },
    methods: {
      getcontent() {  
        console.log("lid="+this.lid);
        var url = "details/search?lid=" + this.lid;
        this.$http.get(url).then(result => {
               console.log(result);
              // console.log(result.body.pics);
              // console.log(result.body.product);
          this.pics=result.body.pics;
          this.list= result.body.product;
         
        });
      },
      buy(){
        var url = "details/buy?lid=" + this.lid;
        this.$http.get(url).then(result => {
               console.log(result);  
               if(result.data.ok == 1){
                 alert("添加成功");
               }else if(result.data.ok == -1){
                alert("你已经添加到订单");
               }else{
                 alert("请先登录!")
               }
        });
      }
    }
  })
  $("#smImg").on("mouseover", "img", function () {
    var $img = $(this);
    $img.css("cursor", "pointer");
    var md = $img.attr("data-lg");
    $("#example").attr("src", md);
  })

  $("#ai").click(function(){
    if($("#ai").attr("src")=="./images/details/ai-1.png"){
      $("#ai").attr("src","./images/details/ai-2.png");
    }else{
      $("#ai").attr("src","./images/details/ai-1.png");
    }
  })