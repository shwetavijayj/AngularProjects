import { Component, OnInit } from '@angular/core';
import { SecondComponent } from '../second/second.component';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor() {
   }
   logForm(val:any){
     console.log(val);
     let obj = new SecondComponent();
     obj.myFun(val);
   }
  
}
