$(function(){
$(".detail_intr").on("click", "a", function () {
    var $a = $(this);
    if(!$a.is(".active")){
        $a.addClass("active").siblings().removeClass("active");
         var id=$a.attr("href");
         if(id==".comment"){
            $(id).css("display","block");
            $(".introduce").css("display","none"); 
         }else{
            $(id).css("display","block");
             $(".comment").css("display","none"); 
        }
           
    }
})
})