/**
 * Created by 韩吉鑫 on 2017/7/24.
 */
//为了防止其他的插件与jq重名，可以通过下面方式重新定义jq对象
var $=jQuery.noConflict();
(function () {


    function Login() {
         this.shoulogin();
    }
    Login.prototype.shoulogin=function () {
        var black=$("<div></div>")
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        black.css({
          width:"100%",
            height:height+"px",
            "background-color":"black",
            position:"fixed",
            "z-index":"9998",
            left:0,
            top:0,
            opacity: 0.3,

        });
        $(document.body).append(black);
        var self=this;
        var loginContainer=$("<div class='loginContainer'></div>")
        var close=$("<p>关闭</p>")
        var username=$("<p><input type='text' placeholder='请输入用户名'></p>")
        var password=$("<p><input type='password' placeholder='请输入密码'></p>")
        var button=$("<p><span>&nbsp;&nbsp;登录&nbsp;&nbsp;</span></p>")

        var left=(width-400)/2;
        var top=(height-200)/2;

        // $(".header-top-login").click(function () {
        //
               $(document.body).append(loginContainer);
        // });
        loginContainer.append(close);
        loginContainer.append(username);
        loginContainer.append(password);
        loginContainer.append(button);
        loginContainer.css({
            width:"400px",
            height:"200px",
            "background-color":"#eee",
            position:"absolute",
            "box-sizing": "border-box",
            border:"5px #999 solid",
            left:left+"px",
            top:top+"px",
            "text-align":"center",
            "z-index":"9998"
        })
        close.css({
          float:"right",
            color:"#999",
            padding:"5px"

        });
        close.click(function () {
            loginContainer.remove();
            black.remove();
            $(document.body).css("overflow","auto");
        });
        username.css({
            padding:"30px 0",
        })
        password.css(
            {
                padding:"10px 0",
            }
        );
        button.css({
            color:"white",
            padding:"10px 0",
        });
        button.children("span").css({
            background:"#f41"
        })
        button.click(function () {
            $.post(PRODUT_HOST+LOGIN,{status:"login",username:username.children().val(),password:password.children().val()},function (data) {
                console.log(data);
                if (data.code==0)
                {
                    loginContainer.remove();
                    black.remove();
                    localStorage.setItem("token",""+data.data.token);
                    localStorage.setItem("username",""+data.data.username);

                    $(document.body).css("overflow","auto");
                    $(".header-top-login").parent().html("<a href='#' class='header-top-user'>"+data.data.username+"</a>"+" <a href='#' class='header-top-user-close'>"+"注销</a>");
                       console.log($("#header-top-user-close"));
                    $(".header-top-user-close").click(function () {
                        alert("注销成功");

                        $(".header-top-user-close").parent().html("<a class='header-top-login' href='#'>亲!请登录</a><a class='header-top-register' href='#'>或注册</a>");

                        init();
                    });
                    $(".header-top-shoppingcar").click(function () {
                        $(".section-container").hide();
                        $(".star").hide();
                        $(".section-container-two-content").hide();
                        new  CART(PRODUT_HOST+PRODUT_CART,{},null,function (event) {


                        });
                    })
                    //+"<img src='"+data.avatar+"'>"
                    $(".header-top-user").css({
                        color:"red"
                    })
                }
                else {
                    alert(data.message);
                }
            })
        });
        window.onresize = function (event) {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left=(width-400)/2;
            var top=(height-300)/2;
            loginContainer.css({
                left:left+"px",
                top:top+"px"
            })
        };

    }
    function Register() {
        this.showregister();
    }
    Register.prototype.showregister=function () {
        var black=$("<div></div>")
        var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        black.css({
            width:"100%",
            height:height+"px",
            "background-color":"black",
            position:"fixed",
            "z-index":"9998",
            left:0,
            top:0,
            opacity: 0.3,

        });
        $(document.body).append(black);
        var self=this;
        var loginContainer=$("<div class='loginContainer'></div>")
        var close=$("<p>关闭</p>")
        var username=$("<p><input type='text' placeholder='请输入用户名'></p>")
        var password=$("<p><input type='password' placeholder='请输入密码'></p>")
        var button=$("<p><span>&nbsp;&nbsp;注册&nbsp;&nbsp;</span></p>")

        var left=(width-400)/2;
        var top=(height-200)/2;

        // $(".header-top-login").click(function () {
        //
        $(document.body).append(loginContainer);
        // });
        loginContainer.append(close);
        loginContainer.append(username);
        loginContainer.append(password);
        loginContainer.append(button);
        loginContainer.css({
            width:"400px",
            height:"200px",
            "background-color":"#eee",
            position:"absolute",
            "box-sizing": "border-box",
            border:"5px #999 solid",
            left:left+"px",
            top:top+"px",
            "text-align":"center",
            "z-index":"9998"
        })
        close.css({
            float:"right",
            color:"#999",
            padding:"5px"

        });
        close.click(function () {
            loginContainer.remove();
            black.remove();
            $(document.body).css("overflow","auto");
        });
        username.css({
            padding:"30px 0",
        })
        password.css(
            {
                padding:"10px 0",
            }
        );
        button.css({
            color:"white",
            padding:"10px 0",
        });
        button.children("span").css({
            background:"#f41"
        })
        button.click(function () {
            $.post(PRODUT_HOST+LOGIN,{status:"register",username:username.children().val(),password:password.children().val()},function (data) {
                console.log(data);
                if (data.code==0)
                {
                    loginContainer.remove();
                    black.remove();
                    $(document.body).css("overflow","auto");

                    //+"<img src='"+data.avatar+"'>"
                    $(".header-top-user").css({
                        color:"red"
                    })
                }
                else {
                    alert(data.message);
                }
            })
        });
        window.onresize = function (event) {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var left=(width-400)/2;
            var top=(height-300)/2;
            loginContainer.css({
                left:left+"px",
                top:top+"px"
            })
        };

    }
    window.Login=Login;
    window.Register=Register;
    // new Login();

})();
