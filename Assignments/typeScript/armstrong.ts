function findArmstrong(val:number):boolean{
    let num1:number = val;
    let i:number;
    let sum = 0;
    while(val>0){
        
        i = val%10;
        
        val= Math.floor(val/10);
        
        sum = sum + (i*i*i);
        
    }
    if(sum === num1){
        return true;
    }else{
        return false;
    }
}

let num:number = 153;
let result = findArmstrong(num);
if(result == true){
    console.log("The number is armstrong");
}else{
    console.log("The number is not armstrong");
}