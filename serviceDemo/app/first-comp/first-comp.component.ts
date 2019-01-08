import { Component, OnInit } from '@angular/core';
import { EvenOddService } from '../even-odd-serve.service';

@Component({
  selector: 'app-first-comp',
  templateUrl: './first-comp.component.html',
  styleUrls: ['./first-comp.component.css']
})
export class FirstCompComponent implements OnInit {
  public numArr =[];
  constructor(private _evenOddService: EvenOddService) { }

  ngOnInit() {
    this.numArr = this._evenOddService.getEvenNo();
  }

}
