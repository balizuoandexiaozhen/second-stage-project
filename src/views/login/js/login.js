$(".btn").click(function() {
    var login =  JSON.parse( $.cookie('register'));
    console.log(login.name);
    console.log(login.pwd);
    if(login.name != $(".name").val()) {
        alert("用户名不存在");
    } else if(login.name == $(".name").val() && login.pwd != $(".pwd").val()) {
        alert("密码不正确！");
    } else if(login.name == $(".name").val() && login.pwd == $(".pwd").val()) {
        alert("登录成功！");
        $(location).attr('href','/index/index.html');
    }
})
