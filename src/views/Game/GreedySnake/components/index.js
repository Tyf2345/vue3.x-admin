
//食物
import Food from './food'
import Snake from './snake'

let flag = true
// 贪吃🐍 入口
class Game {
    constructor(el) {
        this.el = el
        this.food = new Food({})
        this.snake = new Snake({})
        this.timer = null
    }
    init() {
        if(!flag) return
        //食物
        this.food.init(this.el)
        // 🐍
        this.snake.init(this.el)
        //🐍移动
        this.runSnake(this.food, this.el)
        //键盘按下
        this.bindKey()
    }
    //移动
    runSnake(food, el) {
        this.timer = setInterval(() => {
            flag = false
            this.snake.move(food, el)
            this.snake.init(el)
            this.boundary()
        }, 130)

    }
    //移动边界
    boundary() {
        const { el, snake, timer } = this
        //地图 ，max  X,Y
        const maxX = el.offsetWidth / snake.width
        const maxY = el.offsetHeight / snake.height

        //🐍头 X,Y
        const headX = snake.body[0].x
        const headY = snake.body[0].y
        // 移动x轴边界
        if (headX < 0 || headX >= maxX) {
            clearInterval(timer)
            flag = true
            alert('X轴撞墙了,最终得分：'+snake.fraction)
        }
        if (headY < 0 || headY >= maxY) {
            clearInterval(timer)
            flag = true
            alert('Y轴撞墙了,最终得分：'+snake.fraction)
        }
    }
    //按键，改变蛇头方向
    bindKey() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = 'left'
                    break;
                case 38:
                    this.snake.direction = 'top'
                    break;
                case 39:
                    this.snake.direction = 'right'
                    break;
                case 40:
                    this.snake.direction = 'bottom'
                    break;
            }
        })
    }
    //移除键盘事件
    removeKeyCode() {
        document.removeEventListener('keydown')
    }
}

export default Game