import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {
    

    
    private employee = [
        { id: 1, name: 'miguel nicolas', email: 'miguel@email.com' },
        { id: 2, name: 'juan lisboa', email: 'juan@email.com' },
      ];

      findAll() {
        return this.employee;
      }
    
      
      findOne(id: number) {
        return this.employee.find((customer) => customer.id === id);
      }
    
      create(employee: any) {
        const newEmployee = { id: Date.now(), ...employee };
        this.employee.push(newEmployee);
        return newEmployee;
      }
    
      remove(id: number) {
        this.employee = this.employee.filter((customer) => customer.id !== id);
        return { deleted: true };
      }

      update(id: number, employee: any) {
        const index = this.employee.findIndex((emp) => emp.id === id);
        if (index === -1) 
          return null;
        }
    }

