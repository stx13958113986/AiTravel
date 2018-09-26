$(function(){
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(res){
            $(res).replaceAll("#header");
            // var vm=new Vue({
            //     el:"#header",
            //     data:{
            //         islogin:false,
            //         keyword:""
            //     },
            //     methods:{
            //         search_click(){
            //            location.href=`http://localhost:3000/products.html?kw=${this.keyword}`
            //         }
            //     }
            // })
            // var $search=$("#header>nav>div>div>div>img");
            // var $input=$search.parent().prev();
            // if(location.search.indexOf("kw=")!=-1){
            //     var kw=location.search.split("=")[1];
            //     $input.val(decodeURI(kw));
            // }
        }
    })
})