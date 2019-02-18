import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  sname:string;

  fun(event:any)
  {
    console.log(event);
    this.sname = event;
  }

}
