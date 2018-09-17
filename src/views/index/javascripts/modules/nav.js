$.ajax({
    type:"get",
    url:"/json/nav-category.json",
    datatype:"json",
    success:function(res){
        var str = '';
        $.each(res,function(index,val){

            str += `<li>
                        <span class="nav-li-font">
                            <i class="iconfont nav-icon">${val.icon}</i>
                            <a href="">${val.title}</a>    
                        </span>
                        <span>></span>
                    </li>`
        })
        $(".nav-list").find("ul").html(str);
        $(".nav-list").find("li").hover(function() {
            $(this).css("background", "rgba(2,181,157,.5)")
            // console.log($(this).css("background"));
        }, function() {
            $(this).css("background", "rgba(2,181,157,.7)")
        });
    }
});