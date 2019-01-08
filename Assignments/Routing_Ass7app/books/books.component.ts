import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  arrBook:string[];
  constructor() {
    this.arrBook =["Angular 2 CookBook","Node.js in action","Professional Android","Learning Spark","Too Big to ignore","Life 3.0","Our Final invention"];
   }

  ngOnInit() {
  }

}
