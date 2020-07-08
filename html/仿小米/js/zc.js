//获取元素
var input = document.getElementsByTagName("input");
var text = document.getElementsByClassName("text")[0];
var password = document.getElementsByClassName("password")[0];
var age = document.getElementsByClassName("age")[0];
var email = document.getElementsByClassName("email")[0];
var yzm = document.getElementsByClassName("yzm")[0];
var btn = document.getElementsByClassName("btn")[0];
var yan = document.getElementsByClassName("yan")[0];
var span = document.getElementsByTagName("span");
//定义正则
var regEx_text = /^[\u4E00-\u9FA5]{2,4}$/;
var regEx_password = /\w/g;
var regEx_age = /\d/g;
var regEx_email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
//定义储存验证码的变量
var code;
//聚焦判断
text.onfocus = function () {
    //姓名判断
    if (regEx_text.test(text.value)) {
        span[0].classList.add("zc_span_active");
    } else {
        span[1].classList.add("zc_span_active");
    }
}
password.onfocus = function () {
    //密码判断
    if (regEx_password.test(password.value)) {
        span[2].classList.add("zc_span_active");
        console.log("a")
    } else {
        span[3].classList.add("zc_span_active");
        console.log("b")
    }
}
age.onfocus = function () {
    //年龄判断
    if (regEx_age.test(age.value)) {
        span[4].classList.add("zc_span_active");
    } else {
        span[5].classList.add("zc_span_active");
    }
}
email.onfocus = function () {
    //邮箱判断
    if (regEx_email.test(email.value)) {
        span[6].classList.add("zc_span_active");
    } else {
        span[7].classList.add("zc_span_active");
    }
}
yan.onfocus = function () {
    //验证码判断
    if (yan.value == code) {
        span[8].classList.add("zc_span_active");
    } else {
        span[9].classList.add("zc_span_active");
    }
}
//失焦判断
text.onblur = function () {
    //姓名
    if (regEx_text.test(text.value)) {
        span[0].classList.add("zc_span_active");
    } else {
        span[1].classList.add("zc_span_active");
    }
}
password.onblur = function () {
    //密码
    if (regEx_password.test(password.value)) {
        span[2].classList.add("zc_span_active");
        console.log("a")
    } else {
        span[3].classList.add("zc_span_active");
        console.log("b")
    }
}
age.onblur = function () {
    //年龄
    if (regEx_age.test(age.value)) {
        span[4].classList.add("zc_span_active");
    } else {
        span[5].classList.add("zc_span_active");
    }
}
email.onblur = function () {
    //邮箱
    if (regEx_email.test(email.value)) {
        span[6].classList.add("zc_span_active");
    } else {
        span[7].classList.add("zc_span_active");
    }
}
yan.onblur = function () {
    //验证码
    if (yan.value == code) {
        span[8].classList.add("zc_span_active");
    } else {
        span[9].classList.add("zc_span_active");
    }
}
function panding() {
    for (var i = 0; i < input.length; i++) {
        input[i].index = i;
        input[i].onclick = function () {
            for (k = 0; k < input.length; k++) {
                input[k].classList.remove("zc_border");
            }
            this.classList.add("zc_border");
        }
    }
}
panding()
yzm.onclick = changeImg;

function changeImg() {
    var arrays = new Array(
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
        'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
        'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
        'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
        'U', 'V', 'W', 'X', 'Y', 'Z'
    );
    code = ''; //重新初始化验证码
    //随机从数组中获取四个元素组成验证码
    for (var i = 0; i < 4; i++) {
        //随机获取一个数组的下标
        var r = parseInt(Math.random() * arrays.length);
        code += arrays[r];
    }
    yzm.innerHTML = code; //将验证码写入指定区域
}
