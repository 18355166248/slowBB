$(function(){
    //点击返回顶部
    $(".footer .top").click(function(){
        $("body,html").animate({scrollTop:0},500);
    })
    //懒加载
    // $("img").lazyload({
    //     // threshold : 200,
    //     effect : "fadeIn"
    // })
})

//返回上一页
function foBack() { 
    window.history.back();
 }
//左上角箭头 返回上一页
function arrowBack() {
    $(".arrowLeft").click(foBack);
}

//初始化isscroll
var myScroll;
function loaded() {
    myScroll = new IScroll('#wrapper',{
        scrollX: true
    });   
}

// template 渲染 封装
function mytemplate(id,ele,data) {
    var str = template(id,data);
    $(ele).html(str);
}

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

// 封装 获取总页数 赋值给select option
function getOptions(select,allPages,cupage) {
    if (select.attr("flag")){
        for (var i=0;i<allPages;i++) {
            var newOption = $("<option></option>");
            newOption.val(i+1).html(i+1+"/"+allPages);
            select.append(newOption);
        }
        select.removeAttr("flag");
    }
    select.val(cupage);
}

