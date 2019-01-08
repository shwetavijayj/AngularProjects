function findSecondLarge(values:number[]):number{
    let max1:number=0;
    let max2:number=0;
    
    for(let i=0;i< values.length;i++){
        if(values[i]>max1){
            max2 = max1;
            max1 = values[i];
        }else if((values[i]> max2) && (values[i] != max1)){
            max2 = values[i]
        }
    }
    return max2;
}

var arr:number[]=[45,35,546,12,546,457];
let ans = findSecondLarge(arr);
console.log(ans);
