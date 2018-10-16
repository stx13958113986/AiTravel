new Vue({
    el:"#main",
    data() {
      return {
        list: [],
        lid:[]
      };
    },
    components: {},
    created() {
      this.getcontent(); 
    },
    methods: {
  
      getcontent() {  
        var url = "details/content"
        this.$http.get(url).then(result => {
        console.log(result);
          this.lid=result.body.lid;
          this.list=result.body.product;
          console.log(this.list) 
          
        });
      },
      del(i){
        var id=this.lid[i].product_id;
        var url = "details/del?id="+id;
        this.$http.get(url).then(result => {
          alert("删除成功!")
          window.history.go(0);
        });
      }
    }
  })
