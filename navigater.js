/**
 * Created by 韩吉鑫 on 2017/7/25.
 */
 var $=jQuery.noConflict();
(function () {
    function Navigater() {

    }

    Navigater.prototype.creatview=function (url,supeview,callback) {
        $.get(url,function (result) {
             console.log(result)
            if (result.code==0){
                 result.data.forEach(function (p1, p2, p3) {
                     //创建导航列表
                     supeview.append(new NavgiterItem(p1).click(callback).item)
                 })
            }
        })
    }
    function NavgiterItem(obj) {
        var obj =obj||{};
        this.name=obj.cat_name;
        this.id=obj.cat_id;
        this.item=$("<li>"+this.name+"</li>");
        return this;
    }
    NavgiterItem.prototype.click=function (callback) {
        this.item.on("click",this,callback);

         return this;
    }
    window.NavgiterItem=NavgiterItem;
    window.Navigater=Navigater;
})();