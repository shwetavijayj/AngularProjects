import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-comp',
  template: `<html><h3>INLINE</h3>
            <h2>Hello this is Demo program to demonstrate inline css and template.</h2>
            </html>`,
  styles: ['h3{color:blue;} h2{color:skyblue;}']
})
export class FirstCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
