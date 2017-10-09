/**
 * Created by 韩吉鑫 on 2017/7/29.
 */
//添加地址界面
function addrview() {

    var creatadd=$("<div class='creatadd'></div>");
    var addhead=$("<h3>新增收货地址 </h3>");
    var addclose=$("<span class='addclose'>x</span>");
    addhead.append(addclose);
    creatadd.append(addhead);
    var addbody=$("<div class='addbody'>" +
        "<p>收货地址： 省份：<select id='shengfen'>" +
        "<option value='0'>请选择</option>" +
        "<option value='1'>北京</option>"+
        "<option value='2'>上海</option>"+
        "<option value='3'>辽宁</option>"+
        "<option value='4'>山东</option>"+
        "</select>" +
        "城市：<select id='chengshi'>" +
        "<option value='0'>请选择</option>" +
        "<option value='1'>北京</option>"+
        "<option value='2'>上海</option>"+
        "<option value='3'>辽宁</option>"+
        "<option value='4'>山东</option>"+
        "</select>"+
        "区县：<select id='quxian'>" +
        "<option value='0'>请选择</option>" +
        "<option value='1'>北京</option>"+
        "<option value='2'>上海</option>"+
        "<option value='3'>辽宁</option>"+
        "<option value='4'>山东</option>"+
        "</select>"+
        "</p>" +
        "<p >收货人： &nbsp;&nbsp;" +
        "<input class='shouhuoren'type='text'>"+
        "</p>"+
        "<p >详细地址：" +
        "<input class='xiangxidizhi'type='text'>"+
        "</p>"+
        "<p >电话号码：" +
        "<input class='dianhuahaoma'type='text'>"+
        "</p>"+
        "<p><button class='addrsubmit'>保存地址</button></p>"+
        "</div>");
    creatadd.append(addbody);
    var  zhenzhao=$("<div class='zhezhao'></div>");
    zhenzhao.append(creatadd);
    $(document.body).append(zhenzhao);
    zhenzhao.css({
        width:"100%",
        height:"100%",
        position:"absolute",
        top:0,
        left:0,
        background:"rgba(0,0,0,0.3)",
        "z-index":"98",
    });
    creatadd.css({
        width:"700px",
        height:"400px",
        position:"absolute",
        top:"40%",
        left:"50%",
        background:"white",
        "z-index":"99",
        "margin-left":"-350px",
        "margin-top":"-200px"
    });
    addhead.css({
        "over-flow":"hidden",
        height:"30px",
        "line-height":"30px",
        "font-size":"15px",
        "padding":"0 10px",
        "background":"#aaa",
        color:"white",
    })
    addclose.css({
        float:"right"
    });
    addbody.css({
        padding:"20px 120px"
    });
    $(".addbody p").css(
        {height:"60px",
            "line-height":"40px"

        }
    );
    var obj=new Object();
    $(".addclose").click(function () {
        zhenzhao.remove();
    })
    $(".addrsubmit").click(function () {

        obj.consignee=$(".shouhuoren").val();
        obj.country="中国";
        obj.province=$("#shengfen").find("option:selected").text();
        obj.city=$("#chengshi").find("option:selected").text();
        obj.district=$("#quxian").find("option:selected").text();
        obj.address=$(".xiangxidizhi").val();
        obj.zip_code=$(".dianhuahaoma").val();
        obj.mobile=$(".dianhuahaoma").val();
        obj.address_name=""+obj.country+obj.province+obj.city+obj.district;
        console.log(obj);
        new ADDR(PRODUT_HOST+USER_ADDR,obj,function () {

        });
        new LOOKADDR(PRODUT_HOST+USER_ADDR,null,function (event) {
            $(this).css({
                background:"url('image/header/ok.png') no-repeat center",
                "background-size":"40px 100%"
            })
            console.log(event);
            $(".submit_order_button").click(function () {
                new DOWNORDER(PRODUT_HOST+PRODUT_ORDER,{address_id:event.data.address_id+"",total_prices:parseInt($(".lgsum").text)+""},function () {

                })
                $(".detail-container").empty();
                alert("下单成功");
            })
        });
        zhenzhao.remove();


    });

    return obj;
};