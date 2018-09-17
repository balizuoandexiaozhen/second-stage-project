$.ajax({
    type:"get",
    url:"/json/nav-category.json",
    datatype:"json",
    success:function(res){
        var str1 = '';
        var str2 = '';
        var str3 = '';
        $.each(res,function(index,val){
            str1 += `<li>
                        <span class="nav-li-font">
                            <i class="iconfont nav-icon">${val.icon}</i>
                            <a href="">${val.title}</a>    
                        </span>
                        <span>></span>
                    </li>`
                    var children = val.children;
                    $.each(children,function(index, val) {
                        var str = '';
                        var titles = val.titles;
                        $.each(titles,function(index, val) {
                            str += `<a href="">${val}</a>`
                        })
                        // console.log(str + "<br>");
                        str2 += `<div class="nav-hide-title">
                                    <h3><a href="${val.href}">${val.label}</a></h3>
                                    <a href="">更多></a>
                                </div>
                                <p class="nav-hide-content">${str}</p>`
                        // console.log(titles);
                    })
                    // console.log(str2 + "<br>");
                    str3 += ` <div class="nav-hide">${str2}</div>`
        })
        $(".nav-list-hide").html(str3);
        $(".nav-list").find("ul").html(str1);
        // $(".nav-hide").eq(0).css("display","block");
        $(".nav-list").find("li").hover(function() {
            $(this).css("background", "rgba(2,181,157,.5)")
            var index = $(this).index();
            // console.log(index);
            $(".nav-hide").css("display","none").eq(index).css("display","block");
        }, function() {
            $(this).css("background", "rgba(2,181,157,.7)");
            var index = $(this).index();
            $(".nav-hide").eq(index).css("display","none");
        });
    }
    
});

$.ajax({
    type:"get",
    url:"/json/nav-img.json",
    datatype:"json",
    success:function(res){
        // var str = '';
        // $.each(res.nav-carousel,function(index, val) {
        //     str += ``;
        // })
        // $.each(res,function(index, val) {

        // })
        console.log(res)
        // $(".nav-content-top2").css({
        //     "background-image": url(res.freelife)
        // })
        // $(".nav-content-bottom1").css({
        //     "background-image": url(res.hotel)
        // })
        // $(".nav-content-bottom2").css({
        //     "background-image": url(res.posture)
        // })
        // $(".nav-content-bottom3").css({
        //     "background-image": url(res.merchant)
        // })
    }
})