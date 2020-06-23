
function Heads(data) {
    let heads = []
    data.forEach(item=>{
        for (const k in item) {
            if (heads.indexOf(k)=== -1) {
               heads.push(k)
            }
        }
    })
    return heads
}
export default Heads

