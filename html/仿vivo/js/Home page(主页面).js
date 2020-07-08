var lis=document.getElementById("dhl_ul").getElementsByTagName("li");
console.log(lis);
var xiala=document.getElementById("xiala");
console.log(xiala);
for(var i=0;i<lis.length;i++){
	lis[i].onmouseover=function(){
		xiala.style.top="0px"
		xiala.style.transition="0.5s"
	}
}

for(var i=0;i<lis.length;i++){
	lis[i].onmouseout=function(){
		xiala.style.top="-400px"
		xiala.style.transition="0.5s"
		console.log(xiala)
	}
}



	


