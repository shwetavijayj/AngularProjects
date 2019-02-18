export class Customer {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public phone: Number,
        public addr1: string,
        public addr2: string,
        public city: string,
        public state: string,
        public zipcode: number,
        public incique: string,
        public incisol: string
    ) {

    }
}

export const States = ["Maharashtra", "Punjab", "MP", "UP"];
export const Customers: Array<Customer> = new Array<Customer>();
Customers.push(new Customer("", "", "", 0, "", "", "", "", 0, "", ""));
;