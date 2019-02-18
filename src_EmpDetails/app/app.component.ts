import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmpData, states } from './emp-data';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  empdata: EmpData;
  empdata1: Array<EmpData>;
  frmCustomer: FormGroup;
  constructor() {
    this.empdata = new EmpData("", "", "", 0, "", "", "", 0, "");
    this.empdata1 = new Array<EmpData>();
    this.frmCustomer = new FormGroup({
      firstName: new FormControl(this.empdata.firstName),
      lastName: new FormControl(this.empdata.lastName),
      email: new FormControl(this.empdata.email),
      phone: new FormControl(this.empdata.phone),
      address: new FormControl(this.empdata.address),
      city: new FormControl(this.empdata.city),
      state: new FormControl(this.empdata.state),
      zipCode: new FormControl(this.empdata.zipCode),
      comment: new FormControl(this.empdata.comment)
    })
  }
}
