/**
 * Created by 韩吉鑫 on 2017/7/29.
 */
//查看地址
(function () {



    function LOOKADDR(url,parm,callback) {
        this.url=url;
        this.parm=parm;
        this.callback=callback;
        this.loadData();
    }

    LOOKADDR.prototype.loadData=function () {

        var self=this;
        $.get(this.url+"?token="+localStorage.getItem("token"),this.parm,function (result) {
            console.log(result);
            if (result.code==0){

             self.creatview(result);
            }

        });

    }


    LOOKADDR.prototype.creatview=function (result) {
        var self=this;
        $(".lookaddr").remove();
           result.data.forEach(function (p1, p2, p3) {
               var look_addr=$("<div class='lookaddr'><span>收件人:"+p1.consignee+"</span>" +
                   "<span>详细收货地址:"+p1.address_name+p1.address+"</span><span>手机号码:"+p1.mobile+"</span><button class='deladdr'></button></div>");
               look_addr.data=p1;
               $(".addr-container").append(look_addr);
               $(".deladdr").click(function () {

                       look_addr.remove();
                       console.log(look_addr);
                       new DELADDR(PRODUT_HOST+USER_ADDR,{status:"delete",address_id:p1.address_id,token:""+localStorage.getItem("token")});

                   })
              look_addr.on("click",p1,self.callback);


           })
        $(".lookaddr").css({
            border:"1px solid #f41",
            "height":"40px",
             "line-height":"40px",
             padding:"0 10px",
            "over-flow":"hidden"
        })
        $(".lookaddr:first").css({
            "margin-top":"51px"
        })
        $(".lookaddr span").css({
            "margin-right":"20px"
        })

    }

    window.LOOKADDR=LOOKADDR;
})();