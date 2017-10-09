/**
 * Created by 韩吉鑫 on 2017/7/28.
 */
//结算页面
(function () {
    function BALANCE() {
         this.creatview();
    }
    BALANCE.prototype.creatview=function () {

        $(".detail-container").empty();

        $(".section-container-two-detais").show();
        $(".section-container-two-head h2").text("结算页");
        var balance=$("<div class='balance-container'><h3>填写并核对信息</h3></div>");
        var balance_addr=$("<div class='addr-container'><h3>送货地址</h3><p class='addr-button'>添加收货地址</p></div>");
        var payment=$("<div class='pament'><h3>支付方式</h3><button class='cash-pay'>货到付款</button><button class='now-pay'>在线付款</button></div>");
        var order_details=$("<div class='order_details'><h3>订单详情</h3><p class='order_details_head'><span>商品</span><span>数量</span><span>单价（元）</span><span>小计（元）</span></p></div>");

        var  submit_order=$("<div class='submit_order'> <h3>提交订单</h3><p class='submit_order_foot'><span class='lgsum'></span><button class='submit_order_button'>提交订单</button></p></div>");

      balance.append(balance_addr).append(payment).append(order_details).append(submit_order);
        $(".detail-container").append(balance);
        $(".addr-button").click(function () {
            addrview();
        })
        new LOOKADDR(PRODUT_HOST+USER_ADDR,null,function (event) {
            $(this).css({
                background:"url('image/header/ok.png') no-repeat center",
                "background-size":"40px 100%"
            })
            console.log(event);
            $(".submit_order_button").click(function () {
                new DOWNORDER(PRODUT_HOST+PRODUT_ORDER,{address_id:event.data.address_id+"",total_prices:parseInt($(".lgsum").text())+""},function () {

                })
                $(".detail-container").empty();
                alert("下单成功");
            })
        });
        new LOOKCART(PRODUT_HOST+PRODUT_CART,null,".order_details",function () {
            
        });


    }
    window.BALANCE=BALANCE;

})();