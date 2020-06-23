// 数组转为对象 ==> [xx,qq,aa]:{xx:'',qq:'',aa:''}
function isArrToObj(arr) {
    let obj = {}

    for (let i = 0; i < arr.length; i++) {

        let arr_i = arr[i]
        obj[arr_i] = ''
    }
    return obj

}

export default isArrToObj