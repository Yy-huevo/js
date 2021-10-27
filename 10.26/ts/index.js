//定义food类
class Food {
    constructor() {
        //获取页面中的food元素 并赋值给element
        this.element = document.getElementById('food');
    }
    //定义一个获取food X轴坐标的方法
    get X() {
        return this.element.offsetLeft;
    }
    //定义一个获取food Y轴坐标的方法
    get Y() {
        return this.element.offsetTop;
    }
    //食物位置  不能出现在蛇的身体里
    change(snakeBody) {
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;
        //不能出现在蛇身体里
        let foodInSnake = false;
        for (let i = 0; i < snakeBody.length; i++) {
            let body = snakeBody[i];
            if (left === body.offsetLeft && top === body.offsetTop) {
                foodInSnake = true;
            }
        }
        if (foodInSnake) {
            this.change(snakeBody);
        }
        else {
            this.element.style.left = left + 'px';
            this.element.style.top = top + 'px';
        }
    }
}
//定义表示记分牌的类
class ScorePanel {
    constructor(maxLevel = 10, upScore = 10) {
        this.score = 0;
        this.level = 1;
        this.scoreEle = document.querySelector('.score');
        this.levelEle = document.querySelector('.level');
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }
    // 设置一个加分的方法
    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
        if (this.score % this.upScore === 0) {
            this.levelUp();
        }
    }
    //升级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}
//定义蛇
class Snake {
    constructor() {
        this.element = document.querySelector('.snake');
        this.head = document.querySelector('.snake > div');
        this.bodies = this.element.getElementsByTagName('div');
    }
    //获取蛇的坐标（蛇头坐标）
    get X() {
        return this.head.offsetLeft;
    }
    get Y() {
        return this.head.offsetTop;
    }
    //设置蛇头坐标
    set X(value) {
        if (this.X === value) {
            return;
        }
        if (value < 0 || value > 290) {
            //说明撞墙
            throw new Error("撞墙啦！");
        }
        //蛇不能掉头
        if (this.bodies[1] && this.bodies[1].offsetLeft === value) {
            //若发生掉头 让蛇向反方向继续移动
            //若新值大于X则说明向右走 此时发生掉头 继续让他向左走
            if (value > this.X) {
                value = this.X - 10;
            }
            else {
                value = this.X + 10;
            }
        }
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value) {
        if (this.Y === value) {
            return;
        }
        if (value < 0 || value > 290) {
            //说明撞墙
            throw new Error("撞墙啦！");
        }
        if (this.bodies[1] && this.bodies[1].offsetTop === value) {
            if (value > this.Y) {
                value = this.Y - 10;
            }
            else {
                value = this.Y + 10;
            }
        }
        this.moveBody();
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }
    //蛇身体增加的方法
    addBody() {
        //向element添加div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }
    //身体移动的方法
    moveBody() {
        for (let i = this.bodies.length - 1; i > 0; i--) {
            //获取前边身体的位置
            let X = this.bodies[i - 1].offsetLeft;
            let Y = this.bodies[i - 1].offsetTop;
            //将这个值设置到当前身体
            this.bodies[i].style.left = X + 'px';
            this.bodies[i].style.top = Y + 'px';
        }
    }
    //检查是否撞到自己
    checkHeadBody() {
        //获取所有 身体 检查是否和舌头坐标发生重叠
        for (let i = 1; i < this.bodies.length; i++) {
            let bd = this.bodies[i];
            if (this.X === bd.offsetLeft && this.Y === bd.offsetTop) {
                throw new Error('撞到自己了！');
            }
        }
    }
}
//游戏控制器 控制其他所有类
class GameControl {
    constructor() {
        //创建一个属性存储移动方向
        this.direction = '';
        //创建一个属性记录游戏是否结束
        this.islive = true;
        this.YDirectionEvents = ['ArrowUp', 'Up', 'ArrowDown', "Down"];
        this.XDirectionEvents = ['ArrowLeft', 'Left', 'ArrowRight', "Right"];
        this.snake = new Snake();
        this.food = new Food();
        this.scorepanel = new ScorePanel(10, 2);
        this.init();
    }
    //游戏初始化  调用后游戏开始
    init() {
        document.addEventListener('keydown', this.keydownHandle.bind(this));
        //调用run方法
        this.run();
    }
    //键盘按下的响应函数
    keydownHandle(event) {
        //判断用户是否按下了正确的案件
        if (this.direction === event.key)
            return;
        switch (event.key) {
            case 'Up':
            case 'ArrowUp':
            case 'Down':
            case 'ArrowDown':
                if (this.YDirectionEvents.includes(this.direction))
                    return;
                this.direction = event.key;
                break;
            case 'Left':
            case 'ArrowLeft':
            case 'Right':
            case 'ArrowRight':
                if (this.XDirectionEvents.includes(this.direction))
                    return;
                this.direction = event.key;
                break;
        }
    }
    //创建控制蛇移动的方法
    run() {
        //根据(this.direction)改变位置
        // 向上 top减少
        // 向下 top 增加
        //向左 left减少
        //向右 left增加
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向计算XY值
        switch (this.direction) {
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }
        //检查蛇是否吃到食物
        this.checkEat(X, Y);
        try {
            this.snake.X = X;
            this.snake.Y = Y;
        }
        catch (e) {
            alert(e.message + 'GAME OVER');
            this.islive = false;
        }
        //开启定时调用
        this.islive && setTimeout(this.run.bind(this), 300 - (this.scorepanel.level - 1) * 30);
    }
    checkEat(X, Y) {
        if (X === this.food.X && Y === this.food.Y) {
            //吃到食物 更改食物位置
            this.food.change(this.snake.bodies);
            //分数增加
            this.scorepanel.addScore();
            //蛇增加一节
            this.snake.addBody();

        }
    }
}
new GameControl();
