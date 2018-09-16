//header中方nav

// 引入nav

const nav = require('./header-nav')



$.ajax({
    type:"get",
    url:"/json/header.json",   
    success: function(msg){
        console.log("msg");
    }
});
