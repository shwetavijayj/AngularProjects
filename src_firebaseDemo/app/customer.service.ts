import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
    providedIn: 'root'
})
export class CustomerSevice {
    customerList: AngularFireList<any>;

    constructor(private firebase: AngularFireDatabase) {
        this.customerList = this.firebase.list('customers');
    }

    // getCustomer() {

    //     return this.customerList.snapshotChanges();
    // }

    insertCustomer(customer) {
        console.log("data in customer", customer);

        this.customerList.push({
            firstName: customer.firstName,
            lastName: customer.lastName,
            email: customer.email,
            phone: customer.phone,
            addr1: customer.addr1,
            addr2: customer.addr2,
            city: customer.city,
            state: customer.state,
            zipcode: customer.zipcode,
            incique: customer.incique,
            incisol: customer.incisol
        });
    }





}
