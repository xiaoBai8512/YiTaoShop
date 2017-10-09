/**
 * Created by 韩吉鑫 on 2017/7/30.
 */
//查看订单
(function () {
    function LOOKORDER(url,parm) {
        this.url=url;
        this.parm=parm;
     this.loadData();
    }
    LOOKORDER.prototype.loadData=function () {
        var  self=this;
        $.get(this.url+"?token="+localStorage.getItem("token"),this.parm,function (result) {
            console.log(result);
            self.creatview(result);

        });
    }
        LOOKORDER.prototype.creatview=function (result) {
            $(".section-container").hide();
            $(".star").hide();

            $(".section-container-two-content").hide();
            $(".detail-container").empty();
            $(".section-container-two-detais").show();
            $(".section-container-two-head h2").text("订单详情");
            result.data.forEach(function (p1, p2, p3) {
                var order_container=$("<div class='order_container'></div>");
                var smallsum=null;
                p1.goods_list.forEach(function (h1) {
                    smallsum+=h1.goods_price*h1.goods_number;
                    var cart_content2=$("<div class='cart_content2'><img class='slectimg' src='"+h1.goods_thumb +"'>" + "<span class='goods'>"+h1.goods_name+"</span>");
                    var other=$("<span class='price'>"+h1.goods_price+"元</span>" + "<span class='smallsum'>"+h1.goods_price*h1.goods_number+"元</span ></div>");
                    var number=$("<span class='number'>"+h1.goods_number+"</span>");
                    cart_content2.append(number).append(other);
                    order_container.append(cart_content2);

                })
                var look_addr=$("<div class='lookaddr'><span>收件人:"+p1.consignee+"</span>" +
                    "<span>详细收货地址:"+p1.address_name+p1.address+"</span><span>手机号码:"+p1.mobile+"</span>");
                order_container.append(look_addr);
                $(".detail-container").append(order_container);
            })
            $(".order_container").css({
                border:"1px solid #f41",

                margin:"20px 0"

            });
            $(".lookaddr").css({
                border:"1px solid #f41",
                "height":"40px",
                "line-height":"40px",
                padding:"0 10px",
                "over-flow":"hidden"
            })

            $(".lookaddr span").css({
                "margin-right":"20px"
            })

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
    }
   window.LOOKORDER=LOOKORDER;
})();