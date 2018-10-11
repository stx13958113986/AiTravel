function check() {
    //注册按钮的事件，用ajax提交表单
    $.post("/users/check", {
        "uname": $("#uname").val(),
    }, function (result) {
        if (result == "-1") {
            $(".check").removeClass("ok");
            $(".check").addClass("err")
            $(".check").html("用户已存在");
        } else if (result == "-2") {
            $(".check").removeClass("ok");
            $(".check").addClass("err")
            $(".check").html("账号不能为空");
        } else {
            $(".check").removeClass("err");
            $(".check").addClass("ok")
            $(".check").html("用户可以使用");
        }
    })
};

$("#reg").click(function () {
    //注册按钮的事件，用ajax提交表单
    $.post("/users/check", {
        "uname": $("#uname").val(),
        "upwd": $("#upwd").val(),
        "upwdconfirm": $("#upwdconfirm").val()
    }, function (result) {
        if (result == "1") {
           $("#form-register").submit();
        } else if (result == "-1") {
            $(".check").removeClass("ok");
            $(".check").addClass("err"); 
            $(".check").html("用户已存在");
           
        } else if (result == "-2") {
            $(".check").removeClass("ok");
            $(".check").addClass("err");
            $(".check").html("账号不能为空");
            
        } else if (result == "-3") {
          //  $(".check").removeClass("ok");
            $(".check_pwd").addClass("err");
            $(".check_pwd").html("密码不能为空");
           
        }else if (result == "-4") {
           // $(".check").removeClass("ok");
            $(".check_pwd").addClass("err");
            $(".check_pwd").html("密码不相同");
           
        }
    })
});