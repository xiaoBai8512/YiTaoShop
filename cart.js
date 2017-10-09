/**
 * Created by 韩吉鑫 on 2017/7/26.
 */
(function () {
    function CART(url,parm,superview,callback) {
        this.url=url;
        this.parm=parm;
        this.superview=$(superview);
        this.callback=callback;
        this.loadData();
    }

    CART.prototype.loadData=function () {
        
    var self=this;
    $.get(this.url,{token:localStorage.getItem("token")},function (result) {
        console.log(result);

        self.creatview(result);

    });

        // $.post(this.url+"?token=f6778eeeb5eb4fb329c24593710760c4",function (result) {
        //     console.log(result);
        // });
        }


    CART.prototype.creatview=function (result) {
        var self=this;
        $(".detail-container").empty();
        $(".section-container-two-detais").show();
        $(".section-container-two-head h2").text("购物车");
        var cart_container=$("<div class='cart-container'></div>");
        var cart_head=$("<div class='cart-head'><label><input type='checkbox' value='slect' class='slect' checked>全选</label>" +
            "<span class=''>商品</span><span class=''>数量</span><span class=''>单价（元）</span>" +
            "<span class=''>小计（元）</span><span class=''>删除/购买</span></div>");
        cart_container.append(cart_head);
        var cart_content=null;
        var smallsum=null;
        result.data.forEach(function (p1, p2, p3) {
            if(result.data.length>0){
                smallsum+=p1.goods_price*p1.goods_number;
                var cart_content=$("<div class='cart_content'><label><input type='checkbox' value='slect' class='slectonly' checked><img class='slectimg' src='"+p1.goods_thumb +"'></label>" + "<span class='goods'>"+p1.goods_name+"</span>");
                var other=$("<span class='price'>"+p1.goods_price+"元</span>" + "<span class='smallsum'>"+p1.goods_price*p1.goods_number+"元</span ><button class='delete'>删除</button></div>");
                var number=$("<span class='number'></span>");
                cart_content.data = p1;
                new AddControl(number,10,p1.goods_number,function (value,content) {

                    console.log(value);
                    content.children(".smallsum").text(value* parseInt(content.children(".price").text())+"元");
                    new ADDCART(PRODUT_HOST+PRODUT_CART,{goods_id:content.data.goods_id+"",number:value});
                    var zong=null;
                    for (var i=0;i<$(".smallsum").length;i++)
                    {     zong+=parseInt($($(".smallsum")[i]).text())

                    }
                    $(".lgsum").text("总价："+zong);

                },cart_content);

                cart_content.append(number).append(other);
                cart_container.append(cart_content);
                // cart_content.on("click",p1,self.callback);
                cart_content.children(".delete").click(function () {
                    cart_content.remove();

                    new ADDCART(PRODUT_HOST+PRODUT_CART,{goods_id:p1.goods_id+"",number:0});
                });
            }

        })
        if(result.data.length>0) {
             var cart_foot=$("<div class='cart-foot'><button class='batch-delete'>批量删除</button><span class='lgsum'>总价：￥"+smallsum+"</span><button class='cart-submit'>提交订单</button></div>");
             cart_container.append(cart_foot);
        }
        $(".detail-container").append(cart_container);
        $(".cart-submit").click(function () {
            new DOWNORDER(PRODUT_HOST+PRODUT_ORDER,{status:"add",debug:1},function (ee) {
                console.log(ee);
            })
        })
        cart_container.css({
            width:"1150px",
            margin:"0 auto",
            "padding-top":"20px",
            background:"white"
        });
        cart_head.css({
            height:"104px",
            "line-height":"104px",
            "border-top":"1px solid #f41",
            "border-bottom":"1px solid #f41",
            "font-size":"20px",
            "padding-left":"10px",
            "over-flow":"hidden"
        })
        $(".cart-head").children().css(
            {     display:"inline-block",
                "width":"190px",
                "over-flow":"hidden"
            }
        )
        $(".slectimg").css(
            {     display:"inline-block",
                "width":"102px",
                border:"1px solid #f41",
                "margin-left":"15px",
            }
        )
        $(".cart_content").css(
            {   "font-size":"20px",
                "padding-left":"10px",
                "border-bottom":"1px solid #f41",
                height:"104px",
                "vertical-align": "middle",
                "overflow":"hidden",
                position:"relative"
            }
        )

        $(".cart_content label").css({
            display:"inline-block",
            "width":"190px",
            height:"104px",
            "line-height":"104px",
            "vertical-align": "middle",
            position:"relative" ,
            top:0,
            "over-flow":"hidden"
        })
        $(".slectonly").css({
            position:"absolute",
            top:"45%",
        })

            $(".goods").css({
                display:"inline-block",
                "width":"190px",
                height:"104px",
                "over-flow":"hidden"

            })
        $(".number").css({
            display:"inline-block",
            "width":"190px",
            height:"104px",
        })
        $(".number input").css({
            display:"inline-block",
            "width":"33px",
            height:"29px",
        })
        $(".number button").css({
            display:"inline-block",
            "width":"33px",
            height:"33px",
        })
        $(".price").css({
            display:"inline-block",
            "width":"190px",
            height:"104px",
        })
        $(".smallsum").css({
            display:"inline-block",
            "width":"190px",
            height:"104px",
        })
        $(".cart-foot").css({
            height:"50px",
            "line-height":"50px",
             "font-size":"20px"
        })
        $(".batch-delete").css({

            height:"50px",
            "line-height":"50px",
            width:"150px",
            display:"inline-block",
            background:"red",
            color:"white"
        })
        $(".lgsum").css({
            height:"50px",
            "line-height":"50px",
            display:"inline-block",
            width:"800px"
        })
        $(".cart-submit").css({
            height:"50px",
            "line-height":"50px",
            display:"inline-block",
            width:"150px",
            background:"red",
            color:"white"
        })

        $(".cart-submit").click(function () {
                new BALANCE();
            }
        )
        }

    window.CART=CART;
})();