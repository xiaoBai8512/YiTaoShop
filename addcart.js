/**
 * Created by 韩吉鑫 on 2017/7/27.
 */
(function () {
    function ADDCART(url,parm,superview,callback) {
        this.url=url;
        this.parm=parm;
        this.superview=$(superview);
        this.callback=callback;
        this.loadData();
    }

    ADDCART.prototype.loadData=function () {

        var self=this;
        $.post(this.url+"?token="+localStorage.getItem("token"),this.parm,function (result) {
            console.log(result);
            self.creatview(result);

        });

        // $.post(this.url+"?token=f6778eeeb5eb4fb329c24593710760c4",function (result) {
        //     console.log(result);
        // });
    }


    ADDCART.prototype.creatview=function (result) {

    }

    window.ADDCART=ADDCART;
})();