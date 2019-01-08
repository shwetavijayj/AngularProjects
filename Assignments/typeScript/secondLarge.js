function findSecondLarge(values) {
    var max1 = 0;
    var max2 = 0;
    for (var i = 0; i < values.length; i++) {
        if (values[i] > max1) {
            max2 = max1;
            max1 = values[i];
        }
        else if ((values[i] > max2) && (values[i] != max1)) {
            max2 = values[i];
        }
    }
    return max2;
}
var arr = [45, 35, 546, 12, 546, 457];
var ans = findSecondLarge(arr);
console.log(ans);
