function fibonacci(limit:number):void{
    let sum:number = 0;
    let num1:number=0;
    let num2:number=1;
    // console.log(1);
    for(let i=1;i<= limit;i++){
        console.log(num1," ");
        sum = num1 +num2; 
        num1 = num2;
        num2 = sum;
        
    }
}
let limit:number = 10
fibonacci(limit);