import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {

  public data:any;
  constructor() { }

  myFun(val:any){
    console.log('in my fun',val);
    this.data =val;

  }

}
