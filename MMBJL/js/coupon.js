$(function(){
    $.ajax({
        url : "http://127.0.0.1:9090/api/getcoupon",
        dataType : "json",
        success : function(data) {
            mytemplate("youhuijuan",".menu",data);
        }
    });

    arrowBack();
})