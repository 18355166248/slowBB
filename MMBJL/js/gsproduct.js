$(function(){
    var num1;
    var num2;
    $.ajax({
        url : "http://127.0.0.1:9090/api/getgsshop",
        dataType : "json",
        success : function(data) {
            // console.log(data);
            mytemplate('cityone',".diqu",data);
            getAreaLeft("getgsshoparea","citytwo",".quyu"); 

            var diqus = $(".diqu>li");
            var duihao1 = diqus.children(".duihao").eq(0);
            console.log(duihao1);
            $(duihao1).removeClass("hide");
            diqus.each(function(i,v){
                $(v).on("click",function(){
                    diqus.each(function(i,v){
                        $(v).find(".duihao").addClass("hide");
                    })
                    $(this).find(".duihao").removeClass("hide");
                    var ul = $(this).parent().parent();
                    $(ul).addClass("hide");
                    $(".ll-tile").html($(this).attr("nme2"));
                    // console.log(data.result[i].shopId);
                    num1 = data.result[i].shopId;
                    num2 = parseInt($(".citycenter").attr("areaid"));
                    $(".cityleft").attr("shopId",num1);
                    console.log(num1,num2);
                    getMess(num1,num2);
                })
            })
            $(".cityleft").on("click",function(){
                $(".cityjlone").toggleClass("hide");
                $(".cityjltwo").addClass("hide");
                $(".cityjlthree").addClass("hide");
            })
        }
    })

//封装ajax请求
   function getAreaLeft(name,city,diqu) {
        $.ajax({
            url : "http://127.0.0.1:9090/api/"+name+"",
            dataType : "json",
            success : function(data) {
                // console.log(data);
                mytemplate(city,diqu,data);
                
                num1 = $(".cityleft").attr("shopId");
                num2 = $(".citycenter").attr("areaId");

                //渲染页面
                getMess(num1,num2);
                $(this).find(".duihao").removeClass("hide");

                var quyus = $(".quyu>li");

                var duihao2 = quyus.children(".duihao").eq(0);
                console.log(duihao2);
                $(duihao2).removeClass("hide");
                quyus.each(function(i,v){
                    $(v).on("click",function(){
                        quyus.each(function(i,v){
                            $(v).find(".duihao").addClass("hide");
                        })
                        $(this).find(".duihao").removeClass("hide");
                        var ul = $(this).parent().parent();
                        $(ul).addClass("hide");
                        $(".cc-title").html($(this).attr("nme1"));
                        // console.log(data.result[i].areaId);
                        num2 = data.result[i].areaId ;
                        $(".citycenter").attr("areaId",num2);
                        console.log(num1,num2);
                        getMess(num1,num2);
                    })
                })

                $(".citycenter").on("click",function(){
                    $(".cityjltwo").toggleClass("hide");
                    $(".cityjlone").addClass("hide");
                    $(".cityjlthree").addClass("hide");
                }) 
            }
        })
   }

$(".cityright").on("click",function(){
    $(".cityjltwo").addClass("hide");
    $(".cityjlone").addClass("hide");
    $(".cityjlthree").toggleClass("hide");
}) 

// 请求详情页
    function getMess(num1,num2) {
        $.ajax({
            url : "http://127.0.0.1:9090/api/getgsproduct",
            data : {
                shopid : num1,
                areaid : num2
            },
            dataType : "json",
            success : function(data){
                mytemplate("chanping",".nav",data);
            }
        });
    }

    //左上角小箭头
    arrowBack();
    //点击小火箭 返回顶部
    $(".backTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });
})
