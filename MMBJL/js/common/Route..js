(function(window){
    var Route =  {
        /* 提出url 方便统一管理 */
        baseUrl : "http://127.0.0.1:9090",
        baseApi : "/api/",

        /*1.11 首页菜单栏api  传入参数无*/
        getindexmenu : getindexmenu,
        /*1.2.2、首页的折扣列表中的数据api 传入参数无*/
        getmoneyctrl : getmoneyctrl,
        // /*2.2.1、分类标题api 传入参数无*/
        // getcategorytitle : getcategorytitle,
        // /* 2.2.2、分类列表api titleid: 分类标题的id  ( Number类型) */
        // getcategory : getcategory,
        // /* 2.4.1、根据分类id获取分类名称api categoryid: 分类的id  ( Number类型) */
        // getcategorybyid : getcategorybyid,
        // /* 2.4.2、商品列表api    categoryid ： 分类id  ( Number类型)，
        //                         pageid :  页数id   ( Number类型) */
        // getproductlist : getproductlist,
        // /* 2.6.1、获取商品详情api productid ： 商品id  ( Number类型) */
        // getproduct : getproduct,
        // /* 2.6.2、获取商品评论api  productid ： 商品id   ( Number类型) */
        // getproductcom : getproductcom,
        // /* 3.2、省钱控商品列表api  pageid : 页数id   (Number) 不传默认返回第一页数据 */
        // getmoneyctrl : getmoneyctrl,
        // /* 3.4、国内折扣商品详情api  productid : 商品id (Number) */
        // getmoneyctrlproduct : getmoneyctrlproduct,
        // /* 4.2、国内折扣商品列表api  传入参数无 */
        // getinlanddiscount : getinlanddiscount,
        // /* 4.4、国内折扣商品详情api productid : 商品id (Number) */
        // getdiscountproduct : getdiscountproduct,
        // /* 5.2.1、白菜价标题api  传入参数无 */
        // getbaicaijiatitle : getbaicaijiatitle,
        // /* 5.2.2、白菜价商品列表api  titleid : 标题id (Number)  */
        // getbaicaijiaproduct : getbaicaijiaproduct,
        // /* 6.2、省钱控商品列表api  pageid : 页数id   (Number) 不传默认返回第一页数据 */
        // getmoneyctrl : getmoneyctrl,
        // /* 7.2.1、优惠券标题api  传入参数无 */
        // getcoupon : getcoupon,
        // /* 7.2.2、优惠券列表api  couponid：优惠券标题id  (Number) */
        // getcouponproduct : getcouponproduct,
        // /* 8.2.1、凑单品店铺api  传入参数无 */
        // getgsshop : getgsshop,
        // /* 8.2.2、凑单品区域api  传入参数无 */
        // getgsshoparea : getgsshoparea,
        // /* 8.2.3、凑单品商品列表api  shopid : 店铺id  (Number)
        //                             areaid : 区域id  (Number) */
        // getgsproduct : getgsproduct ,
        // /* 9.2、商城导航api 传入参数无 */
        // getsitenav : getsitenav ,
        // /* 10.2.1、品牌大全标题api  传入参数无 */
        // getbrandtitle : getbrandtitle,
        // /* 10.2.2、品牌标题对应的十大品牌api  brandtitleid：品牌标题id  (Number) */
        // getbrand : getbrand,
        // /* 10.2.3、品牌标题对应的十大品牌的销量排行商品列表api
        //  * brandtitleid：品牌标题id  (Number) 
        //  * pagesize ：展示的数据量 默认为4个 (Number)
        //  */
        // getbrandproductlist : getbrandproductlist,
        // /* 10.2.4、销量排行商品的评论api  productid ： 商品id   ( Number类型) */
        // getproductcom : getproductcom
    }


    /* 1.2.1、首页菜单栏api */
    function getindexmenu(callback) {
        var url = Route.baseUrl+Route.baseApi+"getindexmenu";
        $.ajax({
            url : url,
            dataType : "json",
            success : callback
        })
    } 

    /*1.2.2、首页的折扣列表中的数据api 传入参数无*/
    function getmoneyctrl(callback) {
        var url = Route.baseUrl+Route.baseApi+"getmoneyctrl";
        $.ajax({
            url : url,
            dataType : "json",
            success : callback
        })
    } 



    window.Route = Route;  /* 向外暴露 Route接口 */
})(window);

