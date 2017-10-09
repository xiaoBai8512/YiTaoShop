/**
 * Created by 韩吉鑫 on 2017/7/25.
 */
(function () {


    function GoodItem(obj) {
        this.des = obj;

        var space = 40;
        var colume = 5;
        var width = (1150-space*(colume-1))/colume;

        this.item = $("<div class='good-box'></div>");
        var name = $("<p class='good-name'>"+obj.goods_name
            +"</p>");
        console.log(width);
        var other = $("<p><img width='"+width+"px' src='"+obj.goods_thumb
            +"' alt=''></p><h3>￥"+obj.price+"</h3><p class='good-desc'>"+obj.goods_desc
            +"</p>");
        this.item.append(img);
        this.item.append(name);
        this.item.append(other);
        var img=$("<img src='image/header/sds.png' class='imghover'>")
        img.css({
            position:"absolute",
            top:0,
            left:"10px",
            display:"block",
            width:"60px",
            height:"50px"
        });
        this.item.append(img);

        this.item.css({
            width:width+"px",
            height:"384px",
            "border-top":"2px #ff4411 solid",
            "box-sizing": "border-box",
            float:"left",
            overflow: "hidden",
            position: "relative"
        });

        name.css({
            position: "absolute",
            height: "20px",
            "line-height": "20px",
            display: "none"
        });

        this.item.hover(function () {
            $(this).children().css("display","block");
            $(this).children(".imghover").hide();
        },function () {
            $(".good-name").css("display","none");
            $(this).children(".imghover").show();
        });

    }

    GoodItem.prototype.click=function (callback) {
        this.item.on("click",this,callback);
        return this;
    }
    function Good(url,parm,superview,action) {
        superview.empty();
    this.loadData(url,parm,superview,action)
    }
    Good.prototype.loadData=function (url,parm,superview,action) {
        $.get(url,parm,function (result) {
            if(result.code==0)
            {
                this.showGoodView(result.data,superview,action)
            }
            encodeURIComponent()
        }.bind(this))
    }
    Good.prototype.showGoodView=function (goods,superview,action) {
        goods.forEach(function (p1, p2, p3) {
           superview.append(new GoodItem(p1).click(action).item)

        })
    }
    window.GoodItem=GoodItem;
    window.Good=Good;
})();