//Ajax获取全部分类列表
$.ajax({
    type:"get",
    url:"/json/nav-category.json",
    datatype:"json",
    success:function(res){
        var str1 = '';
        $.each(res,function(index,val){        
            var str3 = '';
            $.each(val.children,function(index,val){
                var str2 = '';
                $.each(val.titles,function(index,val){
                   str2 += `<a href="">${val}</a>`     
                })
                str3 += `<div class="nav-hide-title">
                            <h3><a href="${val.href}">${val.label}</a></h3>
                            <a href="">更多></a>
                        </div>
                        <p class="nav-hide-content">
                           ${str2}
                        </p>`
            })

            str1 += `<li>
                        <span class="nav-li-font">
                            <i class="iconfont nav-icon">${val.icon}</i>
                            <a href="">${val.title}</a>    
                        </span>
                        <span>></span>
                        <div class="nav-hide">
                           ${str3}
                        </div>
                    </li>`
        })
        $(".nav-list").find("ul").html(str1);
        $(".nav-list").find("li").hover(function() {
            $(this).css("background", "rgba(2,181,157,.5)")
            $(this).find(".nav-hide").css("display","block");
        }, function() {
            $(this).css("background", "rgba(2,181,157,.7)");
            $(this).find(".nav-hide").css("display","none");
        });
    }
    
});


//Ajax获取nav图片
$.ajax({
    type:"get",
    url:"/json/nav-img.json",
    datatype:"json",
    success:function(res){
        $(".nav-content-top2").css("background-image", "url("+ res.freelife +")")
        $(".nav-content-bottom1").css("background-image", "url("+ res.hotel +")")
        $(".nav-content-bottom2").css("background-image", "url("+ res.posture +")")
        $(".nav-content-bottom3").css("background-image", "url("+ res.merchant +")")
        var str = '';
        $.each(res.carousel,function(index,val){
            str += `<li></li>`;
        })
        $(".nav-carousel").find("ul").html(str)
        $.each(res.carousel,function(index,val){
            // console.log(val);
            $(".nav-carousel").find("li").eq(index).css("background-image", "url("+ val +")")
        })

    }
})

//轮播图
var timer = null;
	var index = 0;
	timer = setInterval( autoPlay , 4000 );
	function autoPlay(){
		index++;
		if( index == $(".carousel-img").children().length){
			index = 0;
        }
        
		$(".carousel-img").children().eq(index).fadeIn(1500).siblings().fadeOut(1000);
		$(".hover-list").children().eq(index).css("backgroung","#fff").siblings().css("backgroung","rgba(255,255,255,.5)");
	}
	$(".hover-list").children().mouseenter(function(){
		clearInterval(timer);
		index = $(this).index()-1;
		autoPlay();
	}).mouseleave(function(){
		timer = setInterval( autoPlay , 2000 );
    })
    
//鼠标移入轮播图div箭头显示
$(".nav-carousel").hover(function() {
    $(".left").animate("opacity", 1);
    $(".right").animate("opacity", 1);
},function() {
    $(".left").animate("opacity", 0);
    $(".right").animate("opacity", 0);
})