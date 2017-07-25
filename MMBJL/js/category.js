$(function() {
    $.ajax({
        url : "http://127.0.0.1:9090/api/getcategorytitle",
        dataType : "jsonp",
        success : function(data) {
            var str = template("menu-title",data);
            $(".classify").append(str);
            $(".classify>li").each(function(i,v) {
                var that = ($(this)[0]);
                (function() {                  
                     $.ajax({
                        url : "http://127.0.0.1:9090/api/getcategory",
                        data : {
                            titleid:$(that).attr("id")
                        },
                        dataType : "jsonp",
                        success : function(data) {                          
                            var str = template("smallTitle",data);
                            var linow = $(that).eq(1).context.childNodes[3];
                            $(linow).append(str);
                            $(".classify>.menu>.list>li").each(function(i,v) {
                                var that = ($(this)[0]);
                                getList($(that));
                            })
                        },
                        error : function() {
                            console.log("请求出错111");
                        }
                    });
                })();
                $(v).on("click",".top-list",function() {
                    
                    var lili = $(that).eq(1).context.childNodes[3];
                    $($(lili)[0]).toggleClass("hide");
                })
            })
        },
        error : function() {
            console.log("请求出错");
        }
    })

    //封装 请求封装
    function  getList(niu) {
        $.ajax({
            url : "http://127.0.0.1:9090/api/getcategorybyid",
            data : {
                categoryid:niu.attr("id")
            },
            dataType : "jsonp",
            success : function(data) {   
                // console.log(data);  
                var as =  niu.eq(1).context.childNodes[0];
                var dizhi = data.result[0];
                $(as).attr("href","productlist.html?categoryid="+dizhi.categoryId+"&category="+dizhi.category+"&pageid="+dizhi.titleId);
            },
            error : function() {
                console.log("请求出错111");
            }
        });
    }
})