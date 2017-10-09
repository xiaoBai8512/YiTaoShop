/**
 * Created by 韩吉鑫 on 2017/7/26.
 */
/**
 * Created by 韩吉鑫 on 2017/7/26.
 */
(function () {
    function ORDER(url,parm,superview,callback) {
        this.url=url;
        this.parm=parm;
        this.superview=$(superview);
        this.callback=callback;
        this.loadData();
    }

    ORDER.prototype.loadData=function () {

        var self=this;
        $.get(this.url,this.parm,function (result) {
            console.log(result);
            self.creatview(result);

        });}
    ORDER.prototype.creatview=function (result) {

    }

    window.ORDER=ORDER;
})();