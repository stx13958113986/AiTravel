$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header");
            var vm=new Vue({
                el:"#header",
                data:{
                    islogin:false,
                    keyword:"",
                    uname:"",
                    uid: ""
                },
                mounted(){
                    var self=this;
                    this.$http.get("http://localhost:3000/users/islogin").then(res=>{
                        if (res.data.ok == 1) {
                            self.islogin = true;
                            self.uname = res.data.uname;
                            self.uid = res.data.uid;
                          } else
                        self.islogin=false;
                    })
                  },
                  
                methods:{
                    signout(){
                        this.$http.get("http://localhost:3000/users/signout").then(res=>{
                          //this.$router.go(0) //history.go(0)
                          location.href=`http://localhost:3000/index.html`
                        })
                      },
                    update(uid){
                        location.href="http://localhost:3000/update.html?uid=" + uid;
                      }
                }
            })
        }
    })
})