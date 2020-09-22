// 面向对象
// 1.0 构造函数
function Snake(){
    // 2.0 添加属性
    // 获取元素
    this.mapElement = document.getElementById("mapId");
    // 多少行
    this.rowCount = 20;
    // 多少列
    this.colCount = 20;
    // 尺寸
    this.size = 30;
    // 记录所有li标签的大数组
    this.elements = [];
    // 记录代表蛇的li标签的数组
    this.snakeArr=[];
    // 蛇头的坐标（x,y） (col,row)
    this.col = 2;
    this.row = 0;
    // 食物的坐标
    this.eggX = 0;
    this.eggY = 0;
    // 定时器变量
    this.timer = null;
    // 蛇移动的方向
    this.direction = "down";
    // 添加布尔值
    this.isChange = false;
    // ...
}
// 3.0 利用原型添加方法
// 创建地图
Snake.prototype.drawMap= function(){
    // 设置地图map标签的大小
    this.mapElement.style.width = this.colCount * this.size +"px";
    this.mapElement.style.height = this.rowCount * this.size +"px";
    // 创建行
    for(var i = 0 ; i < this.rowCount ; i ++){
        // 创建元素
        var ulCreate = document.createElement("ul");
        // 设置ul标签的高度 
        ulCreate.style.height = this.size +"px";
        // 创建数组（小）
        var arr = [];
        // 创建列
        for(var j = 0 ; j < this.colCount;j++){
            // 创建元素
            var liCreate =  document.createElement("li");
            // 设置liCreate标签的样式
            liCreate.style.width = (this.size-2) +"px";
            liCreate.style.height = (this.size-2) +"px";
            // 把liCreate标签添加到ulCreate标签
            ulCreate.appendChild(liCreate);
            // 把liCreate添加到arr数组
            arr.push(liCreate);
        }
        // 把ulCreate标签添加到map标签
        this.mapElement.appendChild(ulCreate);
        // 把arr数组添加到大数组
        this.elements.push(arr);
    }
}
// 绘制蛇
Snake.prototype.drawSnake = function(){
    // 设置第一行前面3个li标签代表蛇
    for(var i = 0 ; i < 3 ; i++){
        // 设置第一行前面3个li标签背景色
        this.elements[0][i].className="snake";
        // 把代表蛇的li标签添加 snakeArr
        this.snakeArr.push(this.elements[0][i]);
    }
}
// 创建食物
Snake.prototype.drawFood = function(){
    // 设置食物的坐标
    this.eggX = this.random(0,this.colCount);
    this.eggY = this.random(0, this.rowCount);
    // 判断创建的坐标是否和蛇标签发生冲突
    if(this.elements[this.eggY][this.eggX].className =="snake"){
        // 重新创建食物
        this.drawFood();
    }else {
        // 设置食物坐标对应的标签背景色
        this.elements[this.eggY][this.eggX].className="egg";
    }
}
// 创建随机数
Snake.prototype.random = function(min ,max){
    // 返回指定范围的随机函数
    var num =  Math.random()*(max-min)+min;
    return Math.floor(num);
}
// 设置蛇移动
Snake.prototype.snakeMove = function(){
    // 根据direction这个属性值
    switch(this.direction){
            case "right" : // 列
                        this.col ++;
                    break;
            case "left" : // 列
                        this.col --;
                break;
            case "down" : // 行
                        this.row ++;
                break;
            case "up" :  // 行
                        this.row --;
                break;
    }
    // 判断蛇是否超出活动范围
    //   ||  或 
    if(this.col < 0 || this.col > (this.colCount-1) || this.row < 0 || this.row > (this.rowCount-1)){
        //  提示（自定义弹窗）
        console.log("超出范围了！");
        //  清除定时器函数
        clearInterval(this.timer);
        // 终止代码
        return ;
    }

    // 判断蛇头是否跟蛇蛇碰撞了
    for(var i = 0 ; i < this.snakeArr.length;i++){
        // 检测碰撞
        if(this.elements[this.row][this.col] == this.snakeArr[i]){
            // 提示
            console.log("吃到自己了");
            // 清除定时器函数
            clearInterval(this.timer);
            // 终止代码
            return;
        }
    }
    console.log(this.eggY,this.eggX)
    // 判断蛇是否吃到食物
    if(this.row == this.eggY && this.col == this.eggX){ //吃到食物
        // 设置食物标签的背景色
        this.elements[this.eggY][this.eggX].className="snake";
        // 把这个（食物）标签添加蛇数组
        this.snakeArr.push(this.elements[this.eggY][this.eggX]);
        // 重新创建食物
        this.drawFood();
        // ...
    }else { //没吃到食物
        // 设置蛇数组的第一个标签背景色
        this.snakeArr[0].className="";
        // 删除蛇数组的第一个标签
        this.snakeArr.shift();
        // 设置下一个标签的背景色
        this.elements[this.row][this.col].className="snake";
        // 把下一个标签添加到蛇数组
        this.snakeArr.push(this.elements[this.row][this.col]);
    }
}
// 键盘事件的监听（控制蛇移动方向）
Snake.prototype.addEvent = function(){//作用域1
    // 需要记录this
    var _this = this;
    // 事件绑定
    document.onkeydown = function(event){//作用域2
        // 事件对象
        event = event || window.event;
        // 键值码
        var keyCode = event.keyCode;
        // 优化细节
        if(_this.isChange){
            // 终止代码
            return ;
        }
        // 处理逻辑 蛇右边移动禁止按 向按键
        if(_this.direction=="right" && keyCode == 37 ){
            return ;
        }
        if(_this.direction=="left" && keyCode == 39 ){
            return ;
        }
        if(_this.direction=="up" && keyCode == 40 ){
            return ;
        }
        if(_this.direction=="down" && keyCode == 38 ){
            return ;
        }
        // 根据keyCode 给direction赋值
        switch(keyCode){
                case 39 :
                        _this.direction="right";//赋值
                        _this.isChange = true;
                    break;
                case 37 :
                        _this.direction="left";//赋值
                        _this.isChange = true;
                    break;
                case 40 :
                        _this.direction="down";//赋值
                        _this.isChange = true;
                    break;
                case 38 :
                        _this.direction="up";//赋值
                        _this.isChange = true;
                    break;
        }
        // 设置布尔值为false
        setTimeout(function(){
            _this.isChange = false;
        },150)
    }
}
Snake.prototype.init = function(){
    // 调用创建地图函数
    this.drawMap();
    // 调用绘制蛇的函数
    this.drawSnake();
    // 创建食物
    this.drawFood();
    // 监听键盘事件
    this.addEvent();
    // 记录当前函数作用域的this
    var _this = this;
    // 测试
    this.timer = setInterval( function(){
        _this.snakeMove();
    },300 )
}