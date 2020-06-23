import getColor from '../../../../utils/color'
let foods = []
class Food {
    constructor({x,y,width,height}) {
        this.x = x || 0
        this.y = y || 0
        this.width = width || 20
        this.height = height || 20
    }
    //初始化
    init(el) {
        this.bgc = getColor()
        this.delNode()
        this.foodNode(el)
    }
    // 创建食物节点
    foodNode(el) {
        // 创建食物div
        let Div = document.createElement('div')
        // 设置div样式
        Div.style.position = 'absolute'
        Div.style.width = this.width + 'px'
        Div.style.height = this.height + 'px'
        Div.style.backgroundColor = this.bgc
        // 计算 x， y轴坐标 
        this.x = parseInt(Math.random()*el.offsetWidth/this.width)*this.width
        this.y = parseInt(Math.random()*el.offsetHeight/this.height)*this.height

        Div.style.left = this.x + 'px'
        Div.style.top = this.y + 'px'

        //将div 添加到地图中
        el.appendChild(Div)
        //将div添加到数组中
        foods.push(Div)
    }
    //删除食物🍜 和数组中的节点
    delNode() {
        foods.forEach((ele,i)=>{
            //找到父节点，通过父节点删除当前节点
            ele.parentNode.removeChild(ele)
            // 删除数组中的数据， 防止多次实力化时创建多个div（食物🍜）
            foods.splice(i,1)
        })
    }
}

export default Food