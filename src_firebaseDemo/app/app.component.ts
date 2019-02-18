import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Customer, States } from './customer';
import { CustomerSevice } from './customer.service';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
// import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  // public items: Observable<any[]>;

  // constructor(db: AngularFirestore) {
  //   this.items = db.collection('/Batches').valueChanges();
  // }

  customer: Customer;
  customers: Array<Customer>;
  states = States;
  customerForm: FormGroup;
  customerList: AngularFireList<any>;
  showSuccessMessage: boolean;
  constructor(private customerservice: CustomerSevice) {
    this.customer = new Customer("", "", "", 0, "", "", "", "", 0, "", "");
    this.customers = new Array<Customer>();

    this.customerForm = new FormGroup({
      firstName: new FormControl(this.customer.firstName, Validators.compose([Validators.required,
      Validators.pattern('[a-zA-Z]+')
      ])
      ),
      lastName: new FormControl(this.customer.lastName, Validators.compose([Validators.required,
      Validators.pattern('[a-zA-Z]+')
      ])),
      email: new FormControl(this.customer.email, Validators.compose([Validators.required,
      Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+')
      ])),
      phone: new FormControl(this.customer.phone, Validators.compose([Validators.required,
      Validators.pattern('[0-9]+')
      ])),
      addr1: new FormControl(this.customer.addr1),
      addr2: new FormControl(this.customer.addr2),
      city: new FormControl(this.customer.city),
      state: new FormControl(this.customer.state),
      zipcode: new FormControl(this.customer.zipcode, Validators.compose([Validators.required, Validators.minLength(5)])),
      incique: new FormControl(this.customer.incique, Validators.minLength(20)),
      incisol: new FormControl(this.customer.incisol, Validators.minLength(20))
    })

  }//customer
  onSubmit() {
    console.log(this.customerForm.value);
    this.customerservice.insertCustomer(this.customerForm.value);
    // this.showSuccessMessage = true;
    // setTimeout(() => this.showSuccessMessage = false, 3000);
    this.customerForm.reset();
  }


}
