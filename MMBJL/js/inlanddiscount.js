$(function() {
    $.ajax({
        url : "http://127.0.0.1:9090/api/getinlanddiscount",
        dataType : "json",
        success : function(data) {
            mytemplate("messthree",".tuijian",data);
            var imgs = $(".tuijian>li>").find("img");
            imgs.each(function(i,v){
                // console.log($(v).attr("src"));
                $(v).attr("data-original",$(v).attr("src"));
                $(v).removeAttr("src");
            })
            $("img").lazyload({ 
                threshold : 200,
                effect : "fadeIn"
             });
        }
    })

    //点击顶部箭头 返回历史上一页
    $(".arrowLeft ").on("click",foBack);
})