function findMax(values:number[]):number{
    let result:number=0;
    for(let i=0;i<values.length;i++){
        if(values[i]>result){
            result = values[i];
        }
    }
    return result;
}

var arr:number[]=[45,35,546,724,2121,12,546,457];
console.log(
    "Array is:",arr
);
let answer =  findMax(arr);
console.log("Maximum element is:",answer);
