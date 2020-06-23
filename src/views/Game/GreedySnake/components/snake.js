import getColor from '../../../../utils/color'
let snakes = []

class Snake {

    constructor({ width, height, direction }) {
        this.width = width || 20
        this.height = height || 20
        this.direction = direction || 'right'
        this.fraction = 0 // 得分
        this.body = [
            {
                x: 2, y: 2, bgc: 'red'
            }, {
                x: 1, y: 2, bgc: getColor()
            }, {
                x: 0, y: 2, bgc: getColor()
            }
        ]
    }
    //初始化
    init(el) {
        this.delSnake()
        this.snakeNodes(el)
    }
    // 创建🐍节点
    snakeNodes(el) {
        for (let i = 0; i < this.body.length; i++) {
            const ele = this.body[i]
            // 创建div， 设置属性
            let Div = document.createElement('div')
            Div.style.position = 'absolute'
            Div.style.width = this.width + 'px'
            Div.style.height = this.height + 'px'
            Div.style.left = ele.x * this.width + 'px'
            Div.style.top = ele.y * this.height + 'px'
            Div.style.backgroundColor = ele.bgc
            if(i === 0){
                Div.style.textAlign="center"
                Div.style.lineHeight = this.height + 'px'
                Div.style.zIndex = '1'
                Div.innerText = '🐍'
            }
            // 添加到数组中
            snakes.push(Div)
            //添加到地图节点中
            el.appendChild(Div)
        }
    }
    //删除节点，防止被多次实例化调用
    delSnake() {
        
        for (let i = snakes.length - 1; i >= 0; i--) {
            const ele = snakes[i]
            //删除当前元素
            ele.parentNode.removeChild(ele)
            //删除数组中当前元素
            snakes.splice(i, 1)
        }
    }
    //移动🐍
    move(food, el) {
        const { x, y } = food

        //移动身体
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x
            this.body[i].y = this.body[i - 1].y
        }
        //判断蛇头方向
        switch (this.direction) {
            case 'right':
                this.body[0].x += 1
                break;
            case 'left':
                this.body[0].x -= 1
                break;
            case 'top':
                this.body[0].y -= 1
                break;
            case 'bottom':
                this.body[0].y += 1
                break;
        }
        // 判断🐍吃食物
        //🐍头位置
        const headX = this.body[0].x * this.width
        const headY = this.body[0].y * this.height
        if (x === headX && y === headY) {
            // 🐍尾巴添加 div
            let { x, y } = this.body[this.body.length - 1]
            this.body.push({
                x, y, bgc:food.bgc
            })
            //得分
            // this.fraction++
            this.fraction += 2
            //初始化食物
            food.init(el)
        }
    }
}

export default Snake