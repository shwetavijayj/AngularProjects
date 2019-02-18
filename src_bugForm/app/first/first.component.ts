import { Component, OnInit } from '@angular/core';
import { UserDetails } from '../user-details';
@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public temp:any;
  constructor() { }

  ngOnInit() {
  }
  obj = new UserDetails('shweta');
  // getUserData(){
  //   return temp;
  // }
  addData(data:any){
    this.obj = data;
    
  }
}
