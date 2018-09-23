$(".head-select").on("click","li",function() {
    $(this).css("color", "rgb(19, 209, 190)").siblings().css("color","#666");
    var index = $(this).index();
    // console.log($(".list-box").eq(index));
    // $(".list-box").eq(index).css("display", "block").siblings().css("display", "none");
})

// console.log(111)