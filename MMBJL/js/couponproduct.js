//获取地址栏 couponid
var name = getUrlParam("couponid");
var title = getUrlParam("couponTitle");
$(function(){
    $.ajax({
        url : "http://127.0.0.1:9090/api/getcouponproduct",
        data : {
            couponid :name
        },
        dataType : "json",
        success : function(data) {
            mytemplate("youhuijuan",".clix",data);
            $(".title-top").html(title+"优惠劵");
            var length =  $(".clix>.chide").length;
            //点击当前图片 获取蒙版图片
            $(".clix>.chide").each(function(i,v){
                // console.log(i);
                $(v).on("click",function(){
                    $(".mask").toggleClass("hide");
                    console.log(i);
                    maskImg.html(data.result[i].couponProductImg);
                     //点击上一页下一页获取 不同图片
                    $(".next").on("click",function(){
                        if (i>length-2) return;
                        i++;
                        maskImg.html(data.result[i].couponProductImg);
                    })
                    $(".prev").on("click",function(){
                        if (i<=0) return;
                        i--;
                        maskImg.html(data.result[i].couponProductImg);
                    })
                }); 
            })
            var maskImg = $(".mask>.midd-img>.mask-img");
            
            //点击蒙版隐藏蒙版  判断点击是否在目标区域
            $(".mask").on("click",function(e){
                e = window.event || e; // 兼容IE7
                obj = $(e.srcElement || e.target);
                if ($(obj).is(".mask")) {
                    $(".mask").toggleClass("hide");
                    $(".mask>.midd-img>.mask-img").empty();
                }
            })
        }
    });

    

    //点击小火箭 返回顶部
    $(".backTop").click(function(){
        $('body,html').animate({scrollTop:0},500);
    });

    //返回上一页
    arrowBack();
})
