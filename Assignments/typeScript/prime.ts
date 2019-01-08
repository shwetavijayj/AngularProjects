function findPrime(value:number):boolean{
    let answer:boolean = true;
    for(let i= 0;i < (value/2) ;i++){
        if((value%2) == 0){
            answer = false;
            return answer;
        }
    }
    return answer;
}

let num = 17;
let val = findPrime(num);
if(val === false){
    console.log("The number "+num+" is not prime.");
}else{
    console.log("The number "+num+" is prime.");
}
