// 获取地址栏 数据
var name = getUrlParam("brandtitleid");
var titleDi = getUrlParam("brandTitle");
$(function(){
    $.ajax({
        url : "http://127.0.0.1:9090/api/getbrand",
        data : {
            brandtitleid : name
        },
        dataType : "json",
        success : function(data) {
            mytemplate("menu-title",".classify",data);
            // console.log(data);
            $(".tt-title").html(titleDi);
            $(".classify>li").each(function(i,v) {
                if(i == 0) {
                    $(v).find("em").addClass("top1");
                } else if (i ==1) {
                    $(v).find("em").addClass("top2");
                } else if (i ==2) {
                    $(v).find("em").addClass("top3");
                }
            })

            // 渲染销量排行
            getbrandMy(name,4,"zhekou1",".sales");
        }
    })
})

function getbrandMy(name,num,id,ele) {
    $.ajax({
        url : "http://127.0.0.1:9090/api/getbrandproductlist",
        data : {
            brandtitleid : name,
            pagesize : num
        },
        dataType : "json",
        success : function(data) {
            // console.log(data);
            mytemplate(id,ele,data);
            var liS = $(".sales>li");
            liS.each(function(i,v){
                getTalkText(data.result[i].brandTitleId,$(v).attr("productid"));
            })
            
        }
    })
}

function getTalkText(name11,num) {
    $.ajax({
        url : "http://127.0.0.1:9090/api/getproductcom",
        data : {
            productid : num
        },
        dataType : "json",
        success : function(data) {
            // console.log(data);
            mytemplate("pinglun-ti",".talks",data);
            $.ajax({
                url : "http://127.0.0.1:9090/api/getbrandproductlist",
                data : {
                    brandtitleid : name11,
                    pagesize : 1
                },
                dataType : "json",
                success : function(data) {
                    // console.log(data);
                    mytemplate("top-title",".titt",data);
                }
            })
        }
    })
}
