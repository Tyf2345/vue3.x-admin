// 随机获取十六进制颜色
function getColor() {
    var str = "#";
    var arr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    for (var i = 0; i < 6; i++) {
        //产生的每个随机数都是一个索引,根据索引找到数组中对应的值,拼接到一起
        str += arr[parseInt(Math.random() * 16)];

    }
    return str;
}
export default getColor