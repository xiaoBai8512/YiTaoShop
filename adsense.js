/**
 * Created by 韩吉鑫 on 2017/7/26.
 */
(function () {

    function ADSENSE(url,parm,callback) {
           this.url=url;
           this.parm=parm;
           // this.superview=superview;
           this.callback=callback;
           this.loadData();


}
   ADSENSE.prototype.loadData=function () {
        var self=this;
        
       $.get(this.url,this.parm,function (result) {
           console.log(result);
           self.callback(result);
           new AD(PRODUT_HOST+PRODUT_AD,{position_id:result.data[0].position_id},document.body)
       })
    }
    function AD(url,parm,superview) {
         // this.callback=callback;
        this.url=url;
        this.parm=parm;
        this.superview=$(superview);

        this.loadData();
    }
    AD.prototype.loadData=function () {
        var self=this;
       $.get(this.url,this.parm,function (result) {
           console.log(result);
         self.creatview(result);

       })
    }
    AD.prototype.creatview=function (result) {

        var self=this;
          var box=$("<div class='positon'></div>");

           result.data.forEach(function (p1, p2, p3) {


                   var ele=$("<a href='"+p1.thumb+"' target='_blank'><img class='imglink' src='"+p1.url+"'></a>")
                   box.append(ele);



           })



        var coloe=$("<button>x</button>");
        box.append(coloe);
        coloe.css({
            position:"absolute",
            "z-index":"11",
            left:"230px",
            top:"0px",

        })
        self.superview.append(box);
        $(".imglink").css({
            display:"block",
            width:"250px",
            height:"200px"
        }


        );
        box.css({
            position:"absolute",
            "z-index":"10",
            left:0,
            top:"100px",
            width:"200px",
            height:"200px",
            "background-color":"blue"
        });
        coloe.click(function () {
            box.remove();
        })
    }
  window.ADSENSE=ADSENSE;
})();