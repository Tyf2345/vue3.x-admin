import isArrToObj from '../../../../utils/isArrToObj'

function handleTbody(data, headArr) {

    let newData = []
    let headObj = isArrToObj(headArr)
    data.forEach(item => {

        let newObj = {...headObj}
        for (const k in item) {

            if (headArr.indexOf(k) !== -1) {
                newObj[k] = item[k]
            }
        }
        newData.push(newObj)
        
    })
    return newData
}

export default handleTbody