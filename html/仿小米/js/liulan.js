//logo
//获取元素
var search_logo_box = document.getElementsByClassName("search_logo_box")[0];
//绑定鼠标移入事件
search_logo_box.onmouseover = function () {
    search_logo_box.style.transform = "translateY(-60px)";
}
//绑定鼠标移出事件
search_logo_box.onmouseout = function () {
    search_logo_box.style.transform = "translateY(0)";
}

//产品导航
//获取元素
var search_nav_font = document.getElementsByClassName("search_nav_font")[0];
var search_nav_font_li = search_nav_font.children;
var search_nav_xian = document.getElementsByClassName("search_nav_xian")[0];
var search_ul = document.getElementsByClassName("search_nav_font")[0];
var search_li = search_ul.getElementsByTagName("li");
var search_box = document.getElementsByClassName("search_nav_box")[0];
var search_nav_box = search_box.children;
var search_nav_box1 = document.getElementsByClassName("search_nav_box1")[0];
var search_nav_xian = document.getElementsByClassName("search_nav_xian")[0];
// var search_nav_box_ul = document.getElementsByClassName("search_nav_box_ul")[0];
// console.log(search_nav_box_ul)
var num = 0;
//绑定鼠标移入事件
for (var i = 0; i < search_li.length; i++) {
    search_li[i].index = i;
    search_li[i].onmouseover = function () {
        for(var k = 0;k < search_li.length;k++){
            search_nav_box[k].className = "";
        }
        //设置属性
        search_box.style.visibility = "visible";
        search_box.style.top = "0px";
        search_box.style.opacity = "1";
        search_nav_box[this.index].className = "search_nav_box1";
        search_nav_xian.style.transform = "translateX(" + this.index * 60 + "px)";
    }
    //绑定鼠标移开事件
    search_box.onmouseout = function (event) {
        var event = event || window.event;
        var x = event.clientX;
        var y = event.clientY;
        console.log(x,y);
        //设置属性
        if( y > 320 ){
            search_box.style.visibility = "hidden";
        search_box.style.top = "-200px";
        search_nav_xian.style.transform = "translateX(0)";
        }
        
    }
}

//搜索框
//获取元素
var search_box_sch = document.getElementsByClassName("search_box_sch")[0];
var search_box_ul = document.getElementsByClassName("search_box_ul")[0];
var search_box_btn = document.getElementsByClassName("search_box_btn")[0];
//定义bool开关
var bool = false;
//绑定点击事件
search_box_sch.onclick = function () {
    //判定bool开关
    if (bool == false) {
        bool = true;
        search_box_sch.style.borderColor = "#FF6700";
        search_box_btn.style.borderColor = "#FF6700";
        search_box_ul.style.display = "block";
    }
}
//绑定失焦事件
search_box_sch.onblur = function () {
    //判断bool开关
    if (bool == true) {
        bool = false;
        search_box_sch.style.borderColor = "black";
        search_box_btn.style.borderColor = "black";
        search_box_ul.style.display = "none";
    }
}
$(function () {
    $(document).keydown(function (event) {
        var code = event.keyCode;
        var $current = $(".search_box_ul_active");
        // 判断
        if (code == 40) {//向下
            if ($current.length == 0) {
                // 设置第一个li标签的类名
                $(".search_box_ul li ").eq(0).addClass("search_box_ul_active");
            } else {
                console.log("$current.next().length==", $current.next().length)
                // 判断有没有下一个元素
                if ($current.next().length == 0) {
                    // 设置第一个li标签的类名
                    $(".search_box_ul li ").eq(0).addClass("search_box_ul_active").siblings().removeClass("search_box_ul_active");
                } else {
                    // 设置active的下一个li标签的类名
                    // 移除兄弟元素的类名
                    $current.next().addClass("search_box_ul_active").siblings().removeClass("search_box_ul_active");
                }
            }
        } else if (code == 38) { //向上
            if ($current.prev().length == 0) {
                $(".search_box_ul li ").eq(7).addClass("search_box_ul_active").siblings().removeClass("search_box_ul_active");
            } else {
                $current.prev().addClass("search_box_ul_active").siblings().removeClass("search_box_ul_active");
            }
        }
    })
})

