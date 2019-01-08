function findPrime(value) {
    var answer = true;
    for (var i = 0; i < (value / 2); i++) {
        if ((value % 2) == 0) {
            answer = false;
            return answer;
        }
    }
    return answer;
}
var num = 17;
var val = findPrime(num);
if (val === false) {
    console.log("The number " + num + " is not prime.");
}
else {
    console.log("The number " + num + " is prime.");
}
