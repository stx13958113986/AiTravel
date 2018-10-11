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
              console.log(result.body.pics);
              console.log(result.body.product);
          this.pics=result.body.pics;
          this.list= result.body.product;
         
        });
      },

    }
  })
  $("#smImg").on("mouseover", "img", function () {
    var $img = $(this);
    $img.css("cursor", "pointer");
    var md = $img.attr("data-lg");
    $("#loupe1").attr("src", md);
  })