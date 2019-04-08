function lonelyinteger(a) {
const duplicates = dict =>
  Object.keys(dict).filter((a) => dict[a] == 1)
var r = duplicates(getDuplicates(a))
var iterator = r.values();
result = iterator.next().value
return parseInt(result, 10) 

}

function getDuplicates(param) {
  var duplicates = {}
  for (var i = 0; i < param.length; i++) {
    var char = param[i]
    if (duplicates[char]) {
      duplicates[char]++
    } else {
      duplicates[char] = 1
    }
  }
  return duplicates
}
// var a = [0 ,0 ,1 ,2 ,1] 
// console.log(lonelyinteger(a)) //expected output: 2

