import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
  arr:string[];
  constructor() {
    this.arr=["Angular","NodeJs","Android","Big Data","AI"];
   }

  ngOnInit() {
  }

}
