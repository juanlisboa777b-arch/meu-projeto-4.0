import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  private customers = [
    { id: 1, name: 'miguel nicolas', email: 'miguel@email.com' },
    { id: 2, name: 'juan lisboa', email: 'juan@email.com' },
  ];

  findAll() {
    return this.customers;
  }

  findOne(id: number) {
    return this.customers.find((customer) => customer.id === id);
  }

  create(customer: any) {
    const newCustomer = { id: Date.now(), ...customer };
    this.customers.push(newCustomer);
    return newCustomer;
  }

  remove(id: number) {
    this.customers = this.customers.filter((customer) => customer.id !== id);
    return { deleted: true };
  }
}