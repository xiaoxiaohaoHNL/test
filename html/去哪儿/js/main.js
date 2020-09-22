// 订单广告
var ddul=document.getElementById("main1_lef_ul");
var ddli=ddul.children;
var dddiv=document.getElementById("main1_left_div");
var dddiv1=dddiv.children;
for(var i=0;i<ddli.length;i++){
	ddli[i].index=i;
ddli[i].onclick=function(){
	for(var j=0;j<ddli.length;j++){
		dddiv1[j].style.display="none";
	}
	dddiv1[this.index].style.display="block";
}
}

// 轮播图
var lbtul=document.getElementById("lbt_ul");
var lbtli1=lbtul.children;
var lbtol=document.getElementById("lbt_yd");
var lbtli2=lbtol.children;
console.log(lbtli2)
for(var i=0; i<lbtli2.length;i++){
	lbtli2[i].index=i;
	lbtli2[i].onclick=function(){
		for(var j=0;j<lbtli2.length;j++){
			lbtli2[j].className=""
		}
		this.className="lbt_ol_con";
		lbtul.style.left="-"+this.index*946+"px";
		lbtul.style.transition="1s all"
	}
	setInterval(function(){
		// lbtul.style.left="-946px";
	},100)
}
