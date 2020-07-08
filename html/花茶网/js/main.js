//获取元素
var head_ul = document.getElementsByClassName("head_ul")[0];
var head_li = head_ul.children;
var contet_box = document.getElementsByClassName("content_box")[0];
var contet_box = contet_box.children;
var donghua_l = document.getElementsByClassName("donghua-l");
//for循环遍历元素
for(var i = 0; i < head_li.length; i++){
    head_li[i].index = i;
    //创建点击事件 使用排他思想
    head_li[i].onclick = function(){
        for(var j = 0; j <head_li.length; j++){
            //清除标签类名
            head_li[j].className = "";
            contet_box[j].className = "";
        }
        //当前点击标签添加类名
        this.className = "head_li_con";
        contet_box[this.index].className = "content_box1";
        donghua_l[this.index].classList.add("f-left");
    }
}

//地图
window.onload = function () {
    function init() {
      // 创建地图
      var map = new qq.maps.Map(document.getElementById("ditu"), {
        center: new qq.maps.LatLng(39.916527, 116.397128),      // 地图的中心地理坐标
        zoom: 8,     // 地图缩放级别
        draggingCursor: "pointer",//拖动地图时的鼠标指针样式
        mapStyleId: 'style1'  // 该key绑定的style1对应于经典地图样式，若未绑定将弹出无权限提示窗
      });
    }
    //调用初始化函数
    init();
  }

//滚轮动画
  // 获取浏览器可见区域高度
  var window_height= document.documentElement.clientHeight;
  // 用户手动修改浏览器可见区域高度时修改变量
  window.onresize=function () {window_height=document.documentElement.clientHeight;};
  // 获取所需效果元素
  var My_vanwee=document.getElementsByClassName('vanwee');
  // 鼠标滚轮滚动执行方法
  window.onscroll = function(){
     // 获取鼠标滚轮滚动距离
     var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     // 循环类vanwee
     for (var k=0;k<My_vanwee.length;k++){
         if (My_vanwee[k].classList.contains("f-up")==false && _scrollTop >= getOffsetTop(My_vanwee[k]) - window_height && _scrollTop<= getOffsetTop(My_vanwee[k])){
             My_vanwee[k].classList.add("f-up");
         }
     }
 };
 // 判断元素父集是否有已定位元素
 function getOffsetTop(ele) {
     var rtn = ele.offsetTop;
     var o = ele.offsetParent;
     while(o!=null) {
             rtn += o.offsetTop;
             o = o.offsetParent;
     }
     return rtn;
 }
 // 滚动条等于0时执行第一屏效果
 function my_animation() {
     var _scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
     // 效果方法
     for (var k=0;k<My_vanwee.length;k++) {
         if (My_vanwee[k].classList.contains("f-up")==false && _scrollTop>= getOffsetTop(My_vanwee[k]) - window_height && _scrollTop<= getOffsetTop(My_vanwee[k])){
             My_vanwee[k].classList.add("f-up");
         }
     }
 }
 my_animation();