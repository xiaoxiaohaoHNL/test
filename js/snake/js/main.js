// 1.0 获取相关元素
var  map = document.getElementById("mapId");
// 2.0 创建地图
// 2.0.1 定义变量 记录数据 
// 多少行
var rowCount = 25;
// 多少列
var colCount = 25;
// 每一列的大小
var size =25;
// 设置地图的大小
map.style.width = colCount * size +"px";
map.style.height = rowCount * size + "px";
// 定义大数组
var elements = [];
// 循环
for(var i = 0 ; i < rowCount ; i++){
    // 创建一个 ul标签 （行）
    var ulCreate = document.createElement("ul");
    // 设置ulCreate标签的大小
    ulCreate.style.height = size +"px";
    //  定义行数组
    var rowArr = [];
    //  循环
    for(var j = 0 ; j < colCount ; j++){
        // 创建一个 li标签 （列）
        var liCreate = document.createElement("li");
        // border:1px solid pink; size为什么减去2
        // 设置liCreate的大小
        liCreate.style.width = (size-2)+"px";
        liCreate.style.height = (size-2)+"px";
        // 把创建的li标签添加到ulCreate标签
        ulCreate.appendChild(liCreate);
        // 记录一行有多少个li标签
        rowArr.push(liCreate);
    }
    // console.log(rowArr)
    // 把ulCreate标签添加到map标签
    map.appendChild(ulCreate);
    // 把rowArr数组添加到大数组
    elements.push(rowArr);
}
// console.log(elements)
// 3.0 创建蛇
// 定义数组 记录代表蛇的li标签
var snakeArr = [];
// 循环
for(var index = 0 ; index < 3 ; index ++){
    // 设置第一行前面三个li标签 背景色
    elements[0][index].className="snake";
    // 把第一行前面三个li标签 添加snakeArr数组
    snakeArr.push(elements[0][index]);
}
console.log(snakeArr)
// 4.0 创建食物
// 定义变量 记录蛇头的位置
var col = 2;
var row = 0;

// 定义变量 记录鸡蛋的位置
var eggCol = 0;
var eggRow = 0;

// 定义随机函数
function random(min,max){
    // 返回随机数
    return Math.floor(Math.random()*(max-min)+min);
}
// 定义创建食物的函数
function createFood(){
    // 记录食物的坐标
    eggCol=random(0,colCount);
    eggRow=random(0,rowCount);
    // 判断 创建的食物是否和蛇的身体冲突
    if(elements[eggRow][eggCol].className =="snake"){
        // 重新创建食物
        createFood();
    }else {
        // 设置食物坐标元素的背景色
        elements[eggRow][eggCol].className="egg";
    }
}
// 创建食物
createFood();

// 5.0 蛇移动的函数（逻辑）
// 定时器函数
var timer = null;
// 记录蛇移动的方向
var direction = "right";
// 定义布尔值
var bool = false;
// 定义蛇移动的函数
function snakeMove(){
    // 通过direction 控制 col 和 row 这两个变量
    // 水平方向 col
    // 垂直方向 row
    switch(direction){
        case "right" :  
                col ++;
            break;
        case "left" :
                col --;
            break;
        case "down" :
                row ++;
            break;
        case "up" :
                row --;
            break;
    }

    // 判断蛇是否超出地图
    if(col < 0 || col > (colCount -1 ) || row < 0 || row > (rowCount - 1)){
        console.log(" 游戏结束了  蛇跑出范围！");
        // 停止定时器
        clearInterval(timer);
        // 终止代码
        return ;
    }
    //判断蛇头是否和蛇身体碰撞了
    for(var k = 0 ; k < snakeArr.length ; k++){
        // 检测蛇头和身体发生碰撞
        if(elements[row][col] == snakeArr[k]){
            console.log("蛇踩到自己了");
            // 停止定时器函数
            clearInterval(timer);
            // 终止代码
            return;
        }
    }
    // 7.0 判断蛇是否吃到食物，游戏是否结束
    // 判断蛇是否吃到食物
    if(col == eggCol && row == eggRow){ //吃到食物了
        // 设置食物的标签背景色
        elements[eggRow][eggCol].className="snake";
        // 往snakeArr数组添加 elements[eggRow][eggCol]这个标签
        snakeArr.push( elements[eggRow][eggCol]);
        // 再次创建食物
        createFood();
        // 记录分数
        // ....
    }else { //没有吃到食物
        // 设置蛇数组的第一个元素的背景色
        snakeArr[0].className="";
        // 从蛇数组中删除第一个元素
        snakeArr.shift();
        // 设置下一个元素的背景色
        elements[row][col].className="snake";
        // 把下一个元素添加到snakeArr数组中
        snakeArr.push(elements[row][col]);
    }

}

// 6.0 控制蛇移动方向
// 事件( 键盘监听事件 onkeydown )
// 事件对象event（数据集合） keyCode  键值码（每个按钮所独有的数值）
// 键盘有上下左右四个箭头按键
// 向上  38
// 向下  40
// 向左  37
// 向右  39

document.onkeydown = function(event){
    // 事件对象
    event = event || window.event;// 兼容写法
    // console.log(event.keyCode)
    // 利用布尔值 防止用户手指同时按下 左下 / 左上 / 右下 / 右上
    if(bool){ // 添加一个延迟
        return ;
    }
    // 键值码
    var keyCode = event.keyCode;
    // 判断蛇往右边移动 ，禁止按下  向左按键
    if(direction == "right" && keyCode == 37){
        return ;//终止代码
    }
    // 判断蛇往左边移动 ，禁止按下  向右按键
    if(direction == "left" && keyCode == 39){
        return ;
    }
    // 判断蛇往上边移动 ，禁止按下  向下按键 
    if(direction =="up" && keyCode == 40){
        return ;
    }
    // 判断蛇往下边移动 ，禁止按下  向上按键
    if(direction =="down" && keyCode == 38){
        return;
    }

    // 设置direction的变量
    switch(keyCode){
        case 39 :
                direction ="right";
                bool = true;
            break;
        case 37 : 
                direction = "left";
                bool = true;
            break;
        case 40 : 
                direction ="down";
                bool = true;
            break;
        case 38 :
                direction ="up";
                bool = true;
            break;
    }

    // 设置延迟函数
    setTimeout(function(){
        bool = false;
    },300);
}


// 测试
timer = setInterval(snakeMove, 300);