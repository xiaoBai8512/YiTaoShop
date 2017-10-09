/**
 * Created by 韩吉鑫 on 2017/7/26.
 */
(function () {
    function Details(url,parm,superview,evnet) {

        this.url=url;
        this.parm=parm;
        this.superview=$(superview);
        this.event=evnet;
        this.creatview();
    }
    
    Details.prototype.creatview=function () {
        $(".section-container-two-detais").show();
        $(".section-container-two-head h2").text("商品详情");
        var self=this;
        $.get(self.url,self.parm,function (result) {
            console.log(result,self.url,self.parm);

            var obj=result.data[0];
            var item=$("<div class='.section-container-two-detais'></div>");
            var img = $("<p class='goods-left'><img width='435px' src='"+obj.goods_thumb
                +"' alt=''>");
             var button=$("<p class='goods-button'></p>")
            var other = $("<div class='father'><p class='goods-name'>"+obj.goods_name
                +"</p></p><h3>￥"+obj.price+"</h3><p class='goods-desc'>"+obj.goods_desc
                +"</p></div>");
             var promptly=$("<div class='promptly-box'><button class='promptly'>立即购买</button><button class='add-shoppingcar'>加入购物车</button></div>")
            item.append(img).append(other).append(button).append(promptly);
            item.css({
                width: "1150px",
                height:"570px",
                "box-sizing": "border-box",
                "border-top": "2px solid #f41",
                "border-bottom": "2px solid #f41",
                padding: "60px 5px",
                margin: "10px auto",
                "background-color":"white",
            })
             self.superview.append(item);

            console.log(button);
            new AddControl(button,10,1,function (a,b) {

            });

            $(".section-container-two-content").hide();
            self.event(result);
            $(".add-shoppingcar").click(function () {
                if(localStorage.getItem("token")!=""){

                new ADDCART(PRODUT_HOST+PRODUT_CART,{goods_id:result.data[0].goods_id+"",number:$(".goods-button input").val()});                           alert("添加购物车成功");

            }
            else {
                    alert("请先登录");
                }

            })

        })

    }

    window.Details=Details;
})();