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

//轮播图
//获取元素
var font_lbt = document.getElementsByClassName("shop_btn_l")[0];
var font_lbt_photo = document.getElementsByClassName("shop_btn_l_ul")[0];
var li1 = font_lbt_photo.getElementsByTagName("li");
var font_lbt_yuan = document.getElementsByClassName("shop_btn_l_ol")[0];
var li3 = font_lbt_yuan.getElementsByTagName("li");

//定义索引值
var num = 0;//轮播图索引值
var yuan = 0;//导航的索引值

//定义宽度
var width = li1[0].offsetWidth;

//定义定时器
var timer = null;

//定义自动切换动画函数
var autoplay = function () {
    //改变索引值
    num++;
    //判断是否大于图片索引值
    if (num > (li1.length - 1)) {
        //改变图片索引值
        num = 1;
        //设置ul的left值
        font_lbt_photo.style.left = 0 + "px";
    }
    //设置ul的left值 使用封装好的动画函数
    move3(font_lbt_photo, 'left', -(num * 1200));

    //改变圆点索引值
    yuan++;
    //三元运算符
    yuan = yuan > (li3.length - 1) ? 0 : yuan;
    //排他思想 圆点跟随轮播图
    for (var i = 0; i < li3.length; i++) {
        //移除圆点的背景颜色
        li3[i].className = "";
    }
    //给对应的圆点添加背景颜色
    li3[yuan].className = "shop_btn_active";
}

//使用定时器调用自动轮播函数，实现自动轮播
timer = setInterval(autoplay, 1500);
//鼠标移入停止轮播
font_lbt.onmouseenter = function () {
    //清除定时器
    clearInterval(timer);
}
//鼠标移开 开始轮播
font_lbt.onmouseleave = function () {
    //清除定时器
    clearInterval(timer);
    //自动轮播
    timer = setInterval(autoplay, 1500);
}

//点击圆点切换图片
for (var j = 0; j < li3.length; j++) {
    //属性绑定
    li3[j].index = j;
    //事件绑定
    li3[j].onclick = function () {
        //获取当前点击圆点额index值
        num = this.index;
        //给圆点索引值赋值
        yuan = this.index;
        //排他思想 导航点跟随轮播
        for (var k = 0; k < li3.length; k++) {
            //移除圆点的背景颜色
            li3[k].className = "";
        }
        //给对应的圆点添加背景颜色
        this.className = "shop_btn_active";
        //改变ul的left值
        move3(font_lbt_photo, 'left', -(num * width));
    }
}

//圆点加函数
var dianjia = function () {
    //改变圆点索引值
    yuan++;
    //三元运算
    yuan = yuan > (li3.length - 1) ? 0 : yuan;
    //排他思想 导航点跟随轮播
    for (var i = 0; i < li3.length; i++) {
        //移除圆点的背景颜色
        li3[i].className = "";
    }
    //给对应的圆点添加背景颜色
    li3[yuan].className = "shop_btn_active";
}

//圆点减函数
var dianjian = function () {
    //改变圆点索引值
    yuan--;
    //三元运算
    yuan = yuan < 0 ? li3.length - 1 : yuan;
    //排他思想 导航点跟随轮播
    for (var i = 0; i < li3.length; i++) {
        //移除圆点的背景颜色
        li3[i].className = "";
    }
    //给对应的圆点添加背景颜色
    li3[yuan].className = "shop_btn_active";
}
//左右点击切换图片 获取左右按钮元素
var right = document.getElementsByClassName("shop_jt_r")[0];
var left = document.getElementsByClassName("shop_jt_l")[0];

//右 给右按钮绑定点击事件
right.onclick = function () {
    //改变索引值
    num++;
    //判断
    if (num > (li1.length - 1)) {
        //给num重新赋值
        num = 1;
        //设置ul的left值
        font_lbt_photo.style.left = 0 + "px";
    }
    //设置ul的left值 使用封装好的动画函数
    move3(font_lbt_photo, 'left', -(num * width));
    //调用圆点加函数
    dianjia();
}

//左 给左按钮绑定点击事件
left.onclick = function () {
    //改变索引值
    num--;
    //判断
    if (num < 0) {
        //给num重新赋值
        num = li1.length - 2;
        //设置ul的left值
        font_lbt_photo.style.left = -(li1.length - 1) * width + "px";
    }
    //设置ul的left值 使用封装好的动画函数
    move3(font_lbt_photo, 'left', -(num * width));
    //调用圆点减函数
    dianjian();
}

//选择版本 选择颜色
var shop_btn_div3_ul = document.getElementsByClassName("shop_btn_div3_ul")[0];
var shop_btn_div3_li = shop_btn_div3_ul.children;
var shop_btn_div4_ul = document.getElementsByClassName("shop_btn_div4_ul")[0];
var shop_btn_div4_li = shop_btn_div4_ul.children;
console.log(shop_btn_div4_li)
console.log(shop_btn_div3_li)
for(var i = 0 ;i < shop_btn_div3_li.length;i++){
    shop_btn_div3_li[i].index = i;
    shop_btn_div3_li[i].onclick = function(){
        for(var k = 0 ; k < shop_btn_div3_li.length ; k++){
            shop_btn_div3_li[k].className = "";
            // shop_btn_div4_li[k].className = "";
        }
        this.className = "shop_btn_div3_active";
        // shop_btn_div4_li[this.index].className = "shop_btn_div4_active";
        console.log("aaa")
    }
}
for(var i = 0 ;i < shop_btn_div4_li.length;i++){
    shop_btn_div4_li[i].index = i;
    shop_btn_div4_li[i].onclick = function(){
        for(var k = 0 ; k < shop_btn_div4_li.length ; k++){
            shop_btn_div4_li[k].className = "";
        }
        this.className = "shop_btn_div4_active";
    }
}