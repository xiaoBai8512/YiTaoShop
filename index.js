/**
 * Created by 韩吉鑫 on 2017/7/24.
 */
function init() {
    localStorage.setItem("token","");
    localStorage.setItem("username","");
    $(".header-top-login").click(function () {
        $(document.body).css("overflow","hidden")
        new Login();
    });
    $(".header-top-register").click(function () {
        $(document.body).css("overflow","hidden")
        new Register();
    });
    var imgdata1=[{imagePath:"image/header/hot1.jpg"},{imagePath:"image/header/hot2.jpg"}];
    var imgdata2=[{imagePath:"image/header/hot3.jpg"},{imagePath:"image/header/hot4.jpg"}];
    // corouselView.Corouse(".section-left",imgdata1,200,340);
    // corouselView.Corouse.putSuperView();
    var han =new corouselView.Corouse(".section-left",imgdata1,200,340);
    var han2=new corouselView.Corouse(".section-center",imgdata2,750,340);
    han.putSuperView();
    han.startTimer(1000);
    $(".section-left").hover(function () {
        han.stopTimer();
        han.createControlButton();
    },function () {
        han.startTimer(1000);
        han.removebuttonControl();
    })
    han2.putSuperView();
    han2.startTimer(1000);
    $(".section-center").hover(function () {
        han2.stopTimer();
        han2.createControlButton();
    },function () {
        han2.startTimer(1000);
        han2.removebuttonControl();
    })
    $(".section-head-container").empty();
     new Navigater().creatview(PRODUT_HOST+PRODUT_TYPE,$(".section-head-container"),function (event) {
         console.log(event);
         $(".section-container").hide();
         $(".star").hide();
         $(".detail-container").empty();
         $(".section-container-two-content").show();
         $(".section-container-two-detais").remove();


         $(".section-container-two-head h2").text("分类商品");
         new Good(PRODUT_HOST+PRODUT_GOOD,{cat_id:event.data.id,page:1,pagesize:10},$(".section-container-two-content"),function (event) {
             console.log(event.data.des.goods_id);


             new Details(PRODUT_HOST+PRODUT_GOOD,{goods_id:event.data.des.goods_id},".detail-container",function () {
                 $(".section-head-container").click(function () {

                     $(".detail-container").empty();
                 })

             });
         });
     });
    new Good(PRODUT_HOST+PRODUT_GOOD,null,$(".section-container-two-content"),function (event) {
        console.log(event);
        console.log(event.data.des.goods_id);
        $(".section-container").hide();
        $(".star").hide();


        new Details(PRODUT_HOST+PRODUT_GOOD,{goods_id:event.data.des.goods_id},".detail-container",function (result) {


            //
            $(".section-head-container").click(function () {

                $(".detail-container").empty();
            })

        });

    });

    $(".search-button").click(function () {
        $(".section-container").hide();
        $(".star").hide();

        var value=$(".search-value").val();
        new Details(PRODUT_HOST+PRODUT_GOOD,{search_text:value},".detail-container",function () {
            $(".section-head-container").click(function () {

                $(".detail-container").empty();
            })


        });
    })
     // new ADSENSE(PRODUT_HOST+PRODUT_POSITION,null,function (result) {
     //
     // });
       // status=add&debug=1
    $(".order").click(function () {
        if (localStorage.getItem("token")){
        new LOOKORDER(PRODUT_HOST+PRODUT_ORDER,null);}
        else {
            alert("请先登录");
        }
    })
    $(".header-search-logo").click(function () {
        $(".section-container").show();
        $(".star").show();

        $(".section-container-two-content").show();
        $(".detail-container").empty();
        $(".section-container-two-detais").show();
        $(".section-container-two-head h2").text("热卖商品");
    })

}
init();

