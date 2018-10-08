$(".login-form-btn").click(function () {
    //注册按钮的事件，用ajax提交表单
    $.post("/users/signin", {
        "uname": $("#uname").val(),
        "upwd": $("#upwd").val()
    }, function (result) {
        console.log(result);
        if (result.ok == "1") {
            //注册成功
            alert("登陆成功！将自动跳转到首页");
            window.location = "http://localhost:3000/index.html";
        } else if (result.ok == "0") {
            alert("用户名或密码错误");
        }
    })
});