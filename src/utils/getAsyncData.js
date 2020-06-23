import { time } from './config'
//模拟ajax异步请求
const getAsyncData = data => {
    return new Promise(res => setTimeout(() => res(data), time))
}
export default getAsyncData