import { Component, OnInit } from '@angular/core';
import { EvenOddService } from '../even-odd-serve.service';

@Component({
  selector: 'app-second-comp',
  templateUrl: './second-comp.component.html',
  styleUrls: ['./second-comp.component.css']
})
export class SecondCompComponent implements OnInit {
  public numArr =[];
  constructor(private _evenOddService: EvenOddService) { }

  ngOnInit() {
    this.numArr = this._evenOddService.getOddNo();
  }

}
