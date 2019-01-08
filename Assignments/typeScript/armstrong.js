function findArmstrong(val) {
    var num1 = val;
    var i;
    var sum = 0;
    while (val > 0) {
        i = val % 10;
        val = Math.floor(val / 10);
        sum = sum + (i * i * i);
    }
    if (sum === num1) {
        return true;
    }
    else {
        return false;
    }
}
var num = 153;
var result = findArmstrong(num);
if (result == true) {
    console.log("The number is armstrong");
}
else {
    console.log("The number is not armstrong");
}
