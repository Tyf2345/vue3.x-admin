// 异步模拟ajax请求
import barData from './bar'
import lineData from './line'
import getAsyncData from '../../utils/getAsyncData'

//柱状图数据
const getBarData = getAsyncData(barData)

//折线图数据
const getLineData = getAsyncData(lineData)
export {
    getBarData,
    getLineData
}