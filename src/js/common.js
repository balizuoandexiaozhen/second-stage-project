$(".haschild").hover(function() {
    $(this).addClass("header-bar-list-active")
    $(this).children("a").css({"color": "#31BBAC"});
    $(this).find(".header-bar-list-show").css({"display": "block"})
},function() {
    $(this).removeClass("header-bar-list-active");
    $(this).children("a").css({"color": "#999"});
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


        $(".header-search-txt").focus(function() {
            $(".header-search-hide").css("display","block")
        })
        $(".header-search-txt").blur(function() {
            $(".header-search-hide").css("display","none")
        })
    }
});