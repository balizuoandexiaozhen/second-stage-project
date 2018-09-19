require('./common')

$(".public-style").focus(function() {
    $(this).css("border-color","#2bb8aa");
})


$(".mobile-num").blur(function() {
    if (fnSname()) {
        getCookie(username);
        // if () {

        // }
    }else {
        console.log($(this).next());
        
    }
    // $(this).css("border-color","#2bb8aa");
})





