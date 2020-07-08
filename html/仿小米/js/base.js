// function $(str) {
// 	var s = str.substr(0, 1); // # . 
// 	var ss = str.substr(1); //#con ==> con
// 	switch (s) {
// 		case "#":
// 			return document.getElementById(ss);
// 			break;
// 		case ".":
// 			return getClass(ss);
// 			break;
// 		default:
// 			return document.getElementsByTagName(str);
// 	}
// }

function getClass(classname) {
	// 如果有方法名,是兼容ie6,7,8
	if (document.getElementsByClassName) {
		return document.getElementsByClassName(classname);
	}

	var con = document.getElementsByTagName("*"); //获取所有标签

	var arr = []; //存放所有满足条件数组
	// 循环所有标签
	for (var i = 0; i < con.length; i++) {
		// li
		// con aa bb
		var spl = con[i].className.split(" "); //数组
		// 字符串切割后的数组
		for (var j = 0; j < spl.length; j++) {

			if (spl[j] == classname) {
				arr.push(con[i]);
			}
		}
	}

	return arr;
}
// 解决滚动条兼容性
function scroll() {

	if (window.pageYOffset != null) {
		return {
			top: window.pageYOffset,
			left: window.pageXOffset
		};
	}

	if (document.compatMode == "CSS1Compat") {
		return {
			top: document.documentElement.scrollTop,
			left: document.documentElement.scrollLeft
		}
	}

	return {
		top: document.body.scrollTop,
		left: document.body.scrollLeft
	}

}
// 解决client兼容
function client() {
	//ie9+ 最新浏览器兼容
	if (window.innerHeight != null) {
		return {
			width: window.innerWidth,
			height: window.innerHeight
		}

	}
	//标准浏览器兼容
	if (document.compatMode = "CSS1Compat") {
		return {
			width: document.documentElement.clienWidth,
			height: document.documentElement.clienHeight
		}

	}

	return {
		width: document.body.clientWidth,
		height: document.body.clientHeight
	}
}


// 解决拖动选中文字方案
function removeAllRange() {
	window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
}

//封装两个隐藏和显示方法
function show(obj) {
	obj.style.display = "block";
}

function hide(obj) {
	obj.style.display = "none";
}

//  定义动画函数 对象 元素  移动值
function move3(dom,attr,val){
    // 清除定时器函数
    clearInterval(dom.timer);
    // 执行定时器函数
    dom.timer = setInterval(function(){
        // 获取dom当前属性值 attr
        var current = getComputedStyle(dom,null)[attr];
         //取整
         current = parseInt(current);
         // 定义步长
         var speed = (val - current) / 10;// 此处的5 就是用于控制速度快慢
        //  此处的数值，如果越小，速度越快
        //  此处的数值，如果越大，速度越慢
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);//三元运算
        // 判断dom是否达到目标属性
        if(current == val){
            // 清除定时器
            clearInterval(dom.timer);
            // 终止代码
            return false;
        }
        // 设置dom的属性值
        dom.style[attr] = current + speed +"px";
    },30)
}

//样式兼容写法
function getStyle(obj, attr) {
	if (obj.currentStyle) {
		return obj.currentStyle[attr]; //返回兼容ie
	} else {
		return window.getComputedStyle(obj, null)[attr]; //w3c 浏览器
	}
}

//清除a标签默认点击事件
function pop(){
}
