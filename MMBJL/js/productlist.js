$(function() {
    var name1 = getUrlParam("category");
    var num = getUrlParam("categoryid");
    var cupage = 1;
	var totalpage = 0;
    $.ajax({
        url:"http://127.0.0.1:9090/api/getcategorybyid",
        dataType : "jsonp",
        data  :{
            categoryid :num
        },
        success : function(data) {               
            var str = template("zhekou",data);
            $(".shuju>.tuijian").html(str);
            var newId = data.result[0].categoryId;
            myAjax(newId);
            
            $(".page .next a").on("click",function() {
                    if (cupage >= totalpage) {
                        alert("听说刘琨唱歌很好听");
                        return;
                    }
                    cupage++;
                    myAjax(newId);
                    $('body,html').animate({scrollTop:0},500);
                })
            $(".page .last a").on("click",function() {
                    if (cupage <= 1) {
                        alert("第一页了!老哥");
                        return;
                    }
                    cupage--;
                    myAjax(newId);
                    $('body,html').animate({scrollTop:0},50);
                })
            //select val变化 
            $(".selectpage").on("change",function() {
                cupage = $(this).val();
                myAjax(newId);
            })
        },
        error : function() {
            console.log("请求出错");
        }
    })

    //封装
    function myAjax(newId) {
        $.ajax({
            url: "http://127.0.0.1:9090/api/getproductlist",
            dataType : "jsonp",
            data  :{
                categoryid :newId,
                pageid : cupage
            },
            success : function(data) {         
                var str = template("zhekou",data);
                $(".shuju>.tuijian").html(str);
                $(".recommend .top-menu-nam").html(name1+">");
                //给a标签 href传入地址
                $(".shuju>.tuijian li").each(function(i,v) {
                    var proId = $(v).attr("id");
                    $(v).children("a").attr("href",'bijia.html?productid='+proId+'');
                })
                totalpage = Math.ceil(data.totalCount / data.pagesize);
                getOptions($(".selectpage"),totalpage,cupage);
            },
            error : function() {
                console.log("请求出错");
            }
        });
    }
})


// //点击 下一页 上一页 
// function clickPN(elePrev,eleNext,select,allPages,cupage) {
//     eleNext.on("click",function() {
//         if (cupage >= allPages) {
//             alert("点你妹");
//             return;
//         }
//         cupage++;
//         myAjax(newId);
//         $('body,html').animate({scrollTop:0},500);
//     })
//    elePrev.on("click",function() {
//         if (cupage <= 1) {
//             alert("点你妹");
//             return;
//         }
//         cupage--;
//         myAjax(newId);
//         $('body,html').animate({scrollTop:0},50);
//     })
//     //select val变化 
//     select.on("change",function() {
//         cupage = $(this).val();
//         myAjax(newId);
//     })
// }
