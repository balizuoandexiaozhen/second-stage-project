// require('./common');
//用户名
function fnSname() {
    var reg = /^1\d{10}$/;
    if (reg.test( $(".mobile-num").val())) {
        return true;
    } else {
        return false;
    }
}

//验证码
function randYzm() {
    var str = "";
    for (var i = 0; i < 4; i++) {
        var r = rand(48, 122);
        if ((r >= 48 && r <=57 )|| (r >= 65 && r <=90) || (r >= 97 && r <=122) ) {
            var s = String.fromCharCode(r);
            str += s;
        } else {
            i--;
        }
    }
    return str;
}


//密码
function fnPwd() {
    var reg = /^.{6,}$/;
    if (reg.test( $(".creat-pwd").val())) {
        return true;
    } else {
        return false;
    }
}

//密码强弱
function pwdStrong(oPwd) {
    var regN = /^\d+$/;
    var regL = /^[a-z]+$/i;
    var reg = /^[^a-z\d]+$/i;
    var _regN = /\d/;
    var _regL = /[a-z]/i;
    var _reg = /[^a-z\d]/i;
    var res = '';
    if (oPwd == "") {
        res = "空";
    } else {
        if (regN.test(oPwd) || regL.test(oPwd) || oPwd.length < 6) {
            res = "弱";        
        } else if (_regN.test(oPwd) && _regL.test(oPwd) && _reg.test(oPwd)) {
            res = "强";    
        } else {
            res = "中";    
        }
    }
    return res;
}


//确认密码
function fnQpwd() {
    if ($(".qr-pwd").val() == $(".creat-pwd").val()) {
        return true;
    } else {
        return false;
    }
}
//随机数
function rand(min, max) {
    return Math.round(Math.random()*(max-min)+min); 
}


//设置cookie
function setCookie( key , value ,day ){
	if( day ){
		var now = new Date();
		now.setDate( now.getDate() + day );
		document.cookie = key +"=" + value + ";expires="+now;
	}else{
		document.cookie = key +"=" + value;
	}
}

//获取cookie  "username"  "password"
function getCookie(key){//tel
	var str = document.cookie;
	if( str ){ //如果cookie存在  根据key取对应的值
		str = str.replace( /\s/g ,"");//去掉cookie中的空格
		var arr = str.split(";");//将字符串拆成数组
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];
			}
		}
		//循环结束后 如果没有找到对应的key   返回""
		return "";
	}
	//cookie 不存在  返回""
	return "";
}

//删除cookie   将key的值设置为""
function removeCookie( key ){
	setCookie( key , "" );
}



var fnSname = false;
var dynamicCode = false;
var creatPwd = false;
var qrPwd = false;

//用户名
$(".public-style").focus(function() {
    $(this).css("border-color","#2bb8aa");
})


$(".mobile-num").blur(function() {
    $(this).css("border-color","red");
    // console.log($(this).css("border-color"))
    if (fnSname()) {
        var str = `<svg class="icon loading" aria-hidden="true">
                        <use xlink:href="#icon-jinggao"></use>
                    </svg>
                    检查中...`
        $(this).next("span").html(str);
        var cookie = 'cookie';
        // if(getCookie(username)) {
        //     cookie = getCookie(username);
        // }
        if ($(this).val() == cookie) {
            var str = `<svg class="icon false" aria-hidden="true">
                            <use xlink:href="#icon-jinggao"></use>
                        </svg>
                        此手机号已被注册过`
            $(this).next("span").html(str);
        } else{
            var str = ` <svg class="icon true" aria-hidden="true">
                            <use xlink:href="#icon-icon_duihao-mian"></use>
                        </svg>`
            $(this).next("span").html(str);
             $(this).css("border-color","#aaa");
             fnSname = true;
        }
    }else if ($(this).val() == "") {
        var str = `<svg class="icon false" aria-hidden="true">
                        <use xlink:href="#icon-jinggao"></use>
                    </svg>
                    请输入您的手机号码`
       $(this).next("span").html(str);
     } else {
        var str = `<svg class="icon false" aria-hidden="true">
                        <use xlink:href="#icon-jinggao"></use>
                    </svg>
                    请输入正确的11位手机号码`
        $(this).next("span").html(str);
    }
    // $(this).css("border-color","red");
})


//获取验证码
$(".free-dynamic-code").click(function() {
    $(this).next("i").html(randYzm());
})

//输入验证码
$(".dynamic-code").blur(function() {
    //  console.log($(this).val())
    //  console.log($(".get-code").html())
    $(this).css("border-color","red");
    if ($(".get-code").html() != "") {
        if ($(this).val() == $(".get-code").html()) {
                var str = ` <svg class="icon true" aria-hidden="true">
                                <use xlink:href="#icon-icon_duihao-mian"></use>
                            </svg>`
            $(this).next("span").html(str);
            $(this).css("border-color","#aaa");
            dynamicCode = true;
        } else if ($(this).val() == "") {
            var str = `<svg class="icon false" aria-hidden="true">
                            <use xlink:href="#icon-jinggao"></use>
                        </svg>
                        请输入验证码`
            $(this).next("span").html(str);
        } else{
            var str = `<svg class="icon false" aria-hidden="true">
                            <use xlink:href="#icon-jinggao"></use>
                        </svg>
                        验证码不正确`
            $(this).next("span").html(str);
        }
    } else {
        var str = `<svg class="icon false" aria-hidden="true">
                        <use xlink:href="#icon-jinggao"></use>
                    </svg>
                    请先获取验证码`
        $(this).next("span").html(str);
    }

})

// $(".weak").click(function() {
//     console.log(000);
//     $(this).find(".yz-hide").css({"display":"block","width": "100%"});
// });

//创建密码
$(".creat-pwd").keyup(function() {

    // console.log($(this).val())
    var res = pwdStrong($(this).val());
    console.log(res)
    // console.log($(this).val().length);
    // console.log($(this).val());
    // console.log($(".weak").children());
    // $(".weak").find(".yz-hide").css({"display":"block","background-color": "rgb(247,97,32)"}).animate({"width": "100%"},1500);
    if(res == "空") {
        // $(".weak").find(".yz-hide").animate({"width": "0%"},1500);
        // $(".mid").find(".yz-hide").animate({"width": "0%"},1500);
        // $(".strong").find(".yz-hide").animate({"width": "0%"},1500);
        $(".weak").find(".yz-hide").css({"background-color": "rgb(255, 137, 0)"}).animate({"width": "0%"},1500);
    } else if (res == "弱") {
        $(".weak").find(".yz-hide").css({"background-color": "rgb(247,97,32)"}).animate({"width": "100%"},1500);
        $(".mid").find(".yz-hide").css({"background-color": "rgb(247,97,32)"}).animate({"width": "0%"},1500);
        $(".strong").find(".yz-hide").css({"background-color": "rgb(247,97,32)"}).animate({"width": "0%"},1500);
    } else if (res == "中") {
        // console.log(1111)
        // console.log($(".strong").find(".yz-hide").css("width"));
        $(".weak").find(".yz-hide").css({"background-color": "rgb(255, 137, 0)"}).animate({"width": "100%"},1500);
        $(".mid").find(".yz-hide").css({"background-color": "rgb(255, 137, 0)"}).animate({"width": "100%"},1500);
        $(".strong").find(".yz-hide").css({"background-color": "rgb(255, 137, 0)"}).animate({"width": "0%"},1500)
    } else if (res == "强") {
        $(".weak").find(".yz-hide").css({"background-color": "rgb(91, 171, 60)"}).animate({"width": "100%"},1500);
        $(".mid").find(".yz-hide").css({"background-color": "rgb(91, 171, 60)"}).animate({"width": "100%"},1500);
        $(".strong").find(".yz-hide").css({"background-color": "rgb(91, 171, 60)"}).animate({"width": "100%"},1500);
    }
    
})

$(".creat-pwd").blur(function() {
    // console.log($(this).val());
    $(this).css("border-color","red");
    if (fnPwd()) {
        var str = `<svg class="icon true" aria-hidden="true">
                        <use xlink:href="#icon-icon_duihao-mian"></use>
                    </svg>`
                    
        $(this).next(".tip").html(str);
        $(this).css("border-color","#aaa");
        creatPwd = true;
    } else {
        var str = `<svg class="icon false" aria-hidden="true">
                        <use xlink:href="#icon-jinggao"></use>
                    </svg>
                    密码太短，至少6个字符`
        $(this).next(".tip").html(str);
    }
})

//确认密码
$(".qr-pwd").blur(function() {
    // console.log(000);
    $(this).css("border-color","red");
    if(fnQpwd()) {
        var str = `<svg class="icon true" aria-hidden="true">
                        <use xlink:href="#icon-icon_duihao-mian"></use>
                    </svg>`
                    
        $(this).next(".tip").html(str);
        $(this).css("border-color","#aaa");
        qrPwd = true;
    } else if ($(this).val() == "") {
        var str = `<svg class="icon false" aria-hidden="true">
                        <use xlink:href="#icon-jinggao"></use>
                    </svg>
                    请确认密码`
       $(this).next("span").html(str);
     } else {
        var str = `<svg class="icon false" aria-hidden="true">
                        <use xlink:href="#icon-jinggao"></use>
                    </svg>
                    两次密码不一致`
        $(this).next("span").html(str);
    }
})

$("form").submit(function() {
    if (fnSame || dynamicCode || creatPed || qrPwd) {
        setCookie( "username" , $(".mobile-num").val(), 7 )
        setCookie( "pwd" , $(".creat-pwd").val(), 7 )
        $(window).attr('location','/login/login.html');
        return true;
    } else {
        return false;
    }
})