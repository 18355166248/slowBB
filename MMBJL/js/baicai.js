$(function(){
    $.ajax({
        url : "http://127.0.0.1:9090/api/getbaicaijiatitle",
        dataType :"json",
        success : function(data) {
            mytemplate("top-menu","#wrapper>.list",data);
            //动态获取ul宽度
            var lis = $("#wrapper>.list>li");
            var width = 0;
            lis.each(function(i,v){
                width +=$(v).width();
            });
            $(lis[0]).addClass("showRed");
            $("#wrapper>.list").width(width+50);
            loaded();
            //点击菜单里面的任何标签 更改下标红线
            getbaicaijia(0);
            lis.on("click",function(){
                $(this).addClass("showRed").siblings().removeClass("showRed");
                var id = $(this).attr("id");
                getbaicaijia(id);
                myScroll.scrollToElement($(this)[0],100,-100);
            })
        }
    });

    //封装ajax请求 数据页面信息
    function getbaicaijia(id) {
        $.ajax({
            url : "http://127.0.0.1:9090/api/getbaicaijiaproduct",
            data : {
                titleid :id
            },
            dataType : "json",
            success : function(data) {
                mytemplate("title-list",".xiangqing>.list",data);
                // console.log(data);
            }
        });
    }

    arrowBack();

    //点击小火箭 返回顶部
    $(".backTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });

})

