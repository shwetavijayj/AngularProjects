function fibonacci(limit) {
    var sum = 0;
    var num1 = 0;
    var num2 = 1;
    // console.log(1);
    for (var i = 1; i <= limit; i++) {
        console.log(num1, " ");
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
}
var limit = 10;
fibonacci(limit);
