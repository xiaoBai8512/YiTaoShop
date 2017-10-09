/**
 * Created by 韩吉鑫 on 2017/7/29.
 */
/**
 * Created by 韩吉鑫 on 2017/7/26.
 */
//结算页查看购物车中的物品
(function () {
    function LOOKCART(url,parm,superview,callback) {
        this.url=url;
        this.parm=parm;
        this.superview=$(superview);
        this.callback=callback;
        this.loadData();
    }

    LOOKCART.prototype.loadData=function () {

        var self=this;
        $.get(this.url,{token:localStorage.getItem("token")},function (result) {
            console.log(result);

            self.creatview(result);

        });


    }


    LOOKCART.prototype.creatview=function (result) {
        var self=this;

        var cart_container=$("<div class='cart-container'></div>");
        var cart_content2=null;
        var smallsum=null;
        result.data.forEach(function (p1, p2, p3) {
            if(result.data.length>0){
                smallsum+=p1.goods_price*p1.goods_number;
                var cart_content2=$("<div class='cart_content2'><img class='slectimg' src='"+p1.goods_thumb +"'>" + "<span class='goods'>"+p1.goods_name+"</span>");
                var other=$("<span class='price'>"+p1.goods_price+"元</span>" + "<span class='smallsum'>"+p1.goods_price*p1.goods_number+"元</span ></div>");
                var number=$("<span class='number'>"+p1.goods_number+"</span>");
                cart_content2.append(number).append(other);
                cart_container.append(cart_content2);


            }

        })
        this.superview.append(cart_container);

        cart_container.css({
            width:"1150px",
            margin:"0 auto",
            background:"white",
            // "line-height":"104px"
        });

        $(".slectimg").css(
            {     display:"inline-block",
                "width":"102px",
                border:"1px solid #f41",
                "margin-left":"15px",
            }
        )
        $(".cart_content2").css(
            {   "font-size":"20px",
                "padding-left":"10px",
                "border-bottom":"1px solid #f41",
                height:"104px",
                "vertical-align": "middle",
                "overflow":"hidden",
                position:"relative",

            }
        )



        $(".goods").css({
            display:"inline-block",
            "width":"300px",
            height:"20px",
            "over-flow":"hidden",
            "vertical-align": top,

        })
        $(".number").css({
            display:"inline-block",
            "width":"260px",
            height:"104px",
            "text-algin":"center",

        })


        $(".price").css({
            display:"inline-block",
            "width":"260px",
            height:"104px",
            "text-algin":"center",
            "line-height":"104px",

        })
        $(".smallsum").css({
            display:"inline-block",
            "width":"190px",
            height:"104px",

            "line-height":"104px",

        })
        $(".lgsum").text("总价："+smallsum+"元");



    }

    window.LOOKCART=LOOKCART;
})();