function add(a,b){
    return a+b
}
function substract( a,b){
    return a-b
}
// console.log(add(10,20));

exports.add = (a,b) => a+b;
exports.subtract = substract;