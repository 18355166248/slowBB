$(function(){
    $.ajax({
        url : "http://127.0.0.1:9090/api/getsitenav",
        dataType : "json",
        success : function(data){
            mytemplate("logo-title",".middle-nav",data);
        }
    })

    // 左上箭头
    arrowBack();
})