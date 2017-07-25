$(function(){
    $.ajax({
        url : "http://127.0.0.1:9090/api/getbrandtitle",
        dataType : "json",
        success : function(data) {
            mytemplate("menu-title",".classify",data);
        }
    })
})