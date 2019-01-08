function findMax(values) {
    var result = 0;
    for (var i = 0; i < values.length; i++) {
        if (values[i] > result) {
            result = values[i];
        }
    }
    return result;
}
var arr = [45, 35, 546, 724, 2121, 12, 546, 457];
console.log("Array is:", arr);
var answer = findMax(arr);
console.log("Maximum element is:", answer);
