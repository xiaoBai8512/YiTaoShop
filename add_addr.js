/**
 * Created by 韩吉鑫 on 2017/7/28.
 */
/*
 添加地址
 */
(function () {



    function ADDR(url,parm,callback) {
        this.url=url;
        this.parm=parm;
        this.callback=callback;
        this.loadData();
    }

    ADDR.prototype.loadData=function () {

        var self=this;
        $.post(this.url+"?status=add&token="+localStorage.getItem("token"),this.parm,function (result) {
            console.log(result);
            if (result.code==0){
                alert("添加地址成功");
                $(".zhenzhao").remove();

            }
            else {
                alert(result.message);
            }
        });

    }


    ADDR.prototype.creatview=function (result) {
               
    }

    window.ADDR=ADDR;
})();