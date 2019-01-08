import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EvenOddService {
  arr;
  constructor() {
    this.arr =[10,20,30,45,14,61,151,453,84550];
   }
  getEvenNo(){
    let result=[];
    this.arr.forEach(element => {
      if(element % 2 == 0)
        result.push(element);
    });
    console.log('Result'+result);
    return result;
  }

  getOddNo(){
    let result=[];
    this.arr.forEach(element => {
      if(element % 2 != 0)
        result.push(element);
    });
    return result;
  }

}
