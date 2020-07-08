function $(str) {
	var s = str.substr(0, 1); // # . 
	var ss = str.substr(1); //#con ==> con
	switch (s) {
		case "#":
			return document.getElementById(ss);
			break;
		case ".":
			return getClass(ss);
			break;
		default:
			return document.getElementsByTagName(str);
	}
}

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

//动画效果 匀速效果
// function aaa(obj,target){
// 	clearInterval(obj.timer);
// 	var speed=obj.offsetLeft<target?10:-10;
// 	// console.log(speed);
// 	obj.timer=setInterval(function(){
// 		var result=target-obj.offsetLeft;//得直接差值 -200
// 		obj.style.left=obj.offsetLeft+speed+"px";
// 		if(Math.abs(result) <=10){
// 			clearInterval(obj.timer);
// 		}
// 		obj.style.left=target+"px";
// 	},20)
// }

//动画效果 缓动效果
function animate(obj, jon, huidiao) {
	clearInterval(obj.timer);
	obj.timer = setInterval(function () {
		var flag = true; //判断是否停止定时器
		for (attr in jon) {
			var shuxingzhi = parseInt(getStyle(obj, attr));

			var buchang = (jon[attr] - shuxingzhi) / 10;
			buchang = buchang > 0 ? Math.ceil(buchang) : Math.floor(buchang)
			obj.style[attr] = buchang + shuxingzhi + "px";
			if (jon[attr] != shuxingzhi) {
				flag = false;
			}
		}
		if (flag) {
			clearInterval(obj.timer);
			if (huidiao) {
				huidiao();
			}
		}
	}, 20)
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
