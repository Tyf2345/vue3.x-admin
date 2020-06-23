// 去重
export function goRepeat(data, name) {

    let newData = [],newObj = {}
    if (data.length) {
        data.forEach(item => {
            if (!newObj[item[name]]) {
                newData.push(item)
                newObj[item[name]] = true
            }
        })
    }
    console.log('newData',newData)
    return newData
}