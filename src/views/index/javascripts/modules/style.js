$.ajax({
    type:"get",
    url:"/json/yougediao.json",
    datatype:"json",
    success: function(res){
        console.log(res)
    }
})

$(".style-list").hover(function() {
    $(this).animate({
        background: rgba(0,0,0,0.7)
    });
}, function() {
    $(this).animate({
        background: rgba(0,0,0,0)
    });
})

