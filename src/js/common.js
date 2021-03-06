//header-bar特效(头部右侧导航)
$(".haschild").hover(function() {
    $(this).addClass("header-bar-list-active")
    $(this).children("a").css({"color": "#31BBAC"});
    $(this).find(".header-bar-list-show").css({"display": "block"})
},function() {
    $(this).removeClass("header-bar-list-active");
    $(this).children("a").css({"color": "#999"});
    $(this).find(".header-bar-list-show").css({"display": "none"})
})

//头部右侧网站导航
$(".haschild").eq(2).hover(function() {
    $(this).find(".header-bar-list-show").css({"display": "flex"})
},function() {
    $(this).find(".header-bar-list-show").css({"display": "none"})
})

$(".app").hover(function() {
    $(this).css({"color": "#31BBAC"});
},function() {
    $(this).css({"color": "#999"})
})

$(".header-bar-list-show").find("a").hover(function() {
    $(this).css({"color": "#31BBAC"});
},function() {
    $(this).css({"color": "#999"})
})

//ajax获取头部搜索框下的内容
$.ajax({
    type:"get",
    url:"/json/header-search.json",
    datatype:"json",
    success:function(res){
        var arr = res[$("#local-city").html()];
        var str1 = '';
        var str2 = '';
        for (var i = 0; i < arr.length; i++) {
            str1 += `<li><a href="">${arr[i]}</a></li>`
        }
        for (var i = 0; i < 6; i++) {
            str2 += `<span>${arr[i]}</span>`
        }
        $(".header-center-list").find("ul").html(str1);
        $(".header-search-hide").find("p").html(str2);

        $(".header-center-list").find("a").hover(function() {
            $(this).css({"color": "#31BBAC"});
        },function() {
            $(this).css({"color": "#666"});
        })
        
        $(".header-search-hide").find("span").hover(function() {
            $(this).css({"color": "#31BBAC"});
        },function() {
            $(this).css({"color": "#666"});
        })

        //获取焦点出现提示框
        $(".header-search-txt").focus(function() {
            $(".header-search-hide").css("display","block")
        })
        $(".header-search-txt").blur(function() {
            $(".header-search-hide").css("display","none")
        })
    }
});

// $li = $("header-bottom").find("li");
// $li.hover(function() {
//     console.log(000)
//     $(this).css({"color": "rgb()251, 199, 0"})
// },function() {
//     $(this).css({"color": "#000"});
// })

//吸顶效果
var $top = $("header").offset().top;
$(window).scroll(function() {
    if($("html,body").scrollTop() >= $top) {
        $("header").css({
            "position": "fixed",
            "z-index": 9999,
            "top": 0,
            "right": 0,
            "left": 0
        })
    } else {
        $("header").css({
            "position": "static"
        })
    }
})