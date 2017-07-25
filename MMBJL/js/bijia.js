      /**
     * 取地址栏的参数
     * 
     * @param key 
     * key为传递的参数名称 例如 http://localhost/test/test.html?p=广东&c=珠海,key就是p和c
     *
     * @returns
     */
    function getUrlParam(key){
        // 获取参数
        var url = window.location.search;
        // 正则筛选地址栏
        var reg = new RegExp("(^|&)"+ key +"=([^&]*)(&|$)");
        // 匹配目标参数
        var result = url.substr(1).match(reg);
        //返回参数值
        return result ? decodeURIComponent(result[2]) : null;
    }



    $(function() {
        var name = getUrlParam("productid");   
        $.ajax({
            url : "http://127.0.0.1:9090/api/getproduct",
            data : {
                productid : name
            },
            dataType : "json",
            success : function(data) {
                console.log(data);
                var str = template("title-pro",data);
                $(".bigtitle").append(str);
                var tt = $(".bigtitle").children("p").html().split(" ")[0];
                $(".top-menu-nam").html(tt);
                var title = data.result[0].categoryId
                
                getping(name);
                getname(title);
            }
        })



        function getping(idi) {
            $.ajax({
                url : "http://127.0.0.1:9090/api/getproductcom",
                data : {
                    productid : idi
                },
                dataType : "json",
                success : function(data) {
                    var str = template("title-text",data);
                    $(".eva").append(str);
                    
                }
            })
        }

        function getname(idi) {
            $.ajax({
                url : "http://127.0.0.1:9090/api/getcategorybyid",
                data : {
                    categoryid : idi
                },
                dataType : "json",
                success : function(data) {
                    var str = template("tt-span",data.result[0]);
                    $("#span").html(str+">");
                }
            })
        }


    })

    