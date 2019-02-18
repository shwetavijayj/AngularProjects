import { Component, OnInit } from '@angular/core';
import { FirstComponent } from '../first/first.component';
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  public data:any;
  constructor() { 
    // let obj1 = new FirstComponent();
    // this.data = obj1.getUserData();
    // console.log("in con",this.data)
  }

  ngOnInit() {
  }
  

}
