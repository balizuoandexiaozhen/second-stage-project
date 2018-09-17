$.ajax({
    type:"get",
    url:"/json/yougediao.json",
    datatype:"json",
    success: function(res){
        console.log(res)
    }
})