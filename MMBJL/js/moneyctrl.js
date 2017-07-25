$(function(){
    //折扣栏请求数据
    var cupage = 1;
	var totalPage = 0;
    var select = $(".selectpage");
    var von = true;
    //封装一个请求函数 请求数据
    function getmess(page) {
        $.ajax({
            url : "http://127.0.0.1:9090/api/getmoneyctrl",
            dataType : "jsonp",
            data : {
                pageid :page
            },
            success : function(data) {
                var str = template("zhekou",data);
                $(".shuju>.tuijian").html(str);
                $(".shuju>.tuijian>li>a").each(function(i,v){
                    var id = $(v).attr("id");
                    $(v).attr("href","moneyproduct.html?productId="+id);
                })
                von = true;
                totalPage = Math.floor(data.totalCount/data.pagesize);
                var options = null;
                
                //判断选择框是否有属性flag
                getOptions(select,totalPage,page);

                //下一页 上一页
                $(".page .next a").on("click",function() {
                    if (page >= totalPage) return;
                    if(von) {
                        von = false;
                        page++;
                        getmess(page);                      
                    }
                                      
                    $('body,html').animate({scrollTop:0},500);
                })
                $(".page .last a").on("click",function() {
                    if (page <= 1) return;
                    if(von) {
                        von = false;
                        page--;
                        getmess(page);                     
                    }
                    von = true;
                    $('body,html').animate({scrollTop:0},10);
                })
                //select val变化 
                select.on("change",function() {
                    page = $(this).val();
                    getmess(page);
                })

                },
            error : function() {
                console.log("请求出错");
            }
        });
    }


      getmess(cupage);


      //点击顶部箭头 返回历史上一页
      $(".arrowLeft ").on("click",foBack);
      
})
