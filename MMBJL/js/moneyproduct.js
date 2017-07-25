//获取地址栏 productId 数据
var num = getUrlParam("productId");
console.log(num);
$(function() {
    $.ajax({
        url : "http://127.0.0.1:9090/api/getmoneyctrlproduct",
        data : {
            productid :num
        },
        dataType : "json",
        success : function(data) {
            // console.log(data);
            mytemplate("guonei",".toptt",data);
        }
    });

    //点击顶部箭头 返回历史上一页
    $(".arrowLeft ").on("click",foBack);
})



