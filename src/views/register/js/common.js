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
    if (reg.test( $id("pwd").value)) {
        return true;
    } else {
        return false;
    }
}

//确认密码
function fnQpwd() {
    if ($(".qr-pwd").val() === $(".creat-pwd").val()) {
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
