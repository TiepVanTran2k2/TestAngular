import { Component } from '@angular/core';
import { employee } from '../model/employee.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent{
  employees: employee[] = [];
  constructor(private employeesService: EmployeesService){}
    ngOnInit(): void {

        this.employeesService.getAllEmployee()
           .subscribe({
            next: (employees) => {
              this.employees = employees;
              console.log(this.employees);
            },
            error: (response) => {
              console.log(response);
            }
           })
           

    }
}
