import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-comp',
  templateUrl: './new-comp.component.html',
  styleUrls: ['./new-comp.component.css']
})
export class NewCompComponent {
   name:string;
   lowerName:string;
   upperName:string;
  constructor() {
      this.name = 'This text will change After some actions';
      this.lowerName ='UPPERCASE WORD TO LOWERCASE';
      this.upperName = 'lowercase to uppercase word';
   }

   fun(){
     this.name = 'The text after some event';
   }

   lower(){
     this.lowerName = this.lowerName.toLocaleLowerCase();
     
   }
   upper(){
     this.upperName = this.upperName.toLocaleUpperCase();
   }
}
