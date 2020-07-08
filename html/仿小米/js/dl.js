//获取元素
var dl_top = document.getElementsByClassName("dl_top")[0];
var dl_top_div = dl_top.children;
var dl_bigBox = document.getElementsByClassName("dl_bigBox")[0];
var dl_bigBox_div = dl_bigBox.children;
//for循环遍历元素
for(var i = 0 ; i < dl_top_div.length ; i++){
    //给index 赋值
    dl_top_div[i].index = i;
    //绑定点击事件
    dl_top_div[i].onclick = function(){
        //循环处理按钮
        for(var k = 0 ; k < dl_top_div.length ; k++){
            dl_top_div[k].classList.remove("dl_top_active");
            dl_bigBox_div[k].classList.add("dl_active");
        }
        this.classList.add("dl_top_active");
        dl_bigBox_div[this.index].classList.remove("dl_active")
    }
}