var name = getUrlParam("productid");
$(function() {
    $.ajax({
        url : "http://127.0.0.1:9090/api/getdiscountproduct",
        data : {
            productid :name
        },
        dataType : "json",
        success : function(data) {
            mytemplate("guonei",".toptt",data);
        }
    })
    //点击顶部箭头 返回历史上一页
    $(".arrowLeft ").on("click",foBack);
})