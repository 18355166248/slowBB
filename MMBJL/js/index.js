$(function(){
    /* 首页菜单栏 数据请求 */
    Route.getindexmenu(function(data) {
        /* 渲染页面 */
        mytemplate("caidan",$(".menu>.menu-deta"),data);
        /* 默认把倒数4个隐藏 */
        $(".menu>.menu-deta>li:nth-last-child(-n+4)").addClass("hide");
        /* 点击显示隐藏 */
        $(".menu>.menu-deta>li:eq(7)").on("click",function(){
            $(".menu>.menu-deta>li:nth-last-child(-n+4)").toggleClass("hide");
        })
    });
    /* 渲染超值折扣推荐详情 */
    Route.getmoneyctrl(function(data) {
        var str = template("zhekou",data);
        $(".shuju>.tuijian").html(str);
    });
})
