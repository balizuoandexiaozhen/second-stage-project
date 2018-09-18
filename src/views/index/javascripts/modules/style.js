$.ajax({
    type:"get",
    url:"/json/yougediao.json",
    datatype:"json",
    success: function(res){
        console.log(res)
    }
})


// $(".style-list").hover(function() {
//     console.log(111);
//     $(this).css({"background-color": "rgba(244, 244, 244,1)"})
//     // $(this).animate({
//     //     "background-color": "rgba(244, 244, 244,1)"
//     // });
// }, function() {
//     $(this).css({"background-color": "rgba(244, 244, 244,0)"})
//     // $(this).animate({
//     //     "background-color": "rgba(244, 244, 244,0)"
//     // });
// })

