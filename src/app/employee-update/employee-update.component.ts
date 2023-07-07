import { Component, Input } from '@angular/core';
import { EmployeesService } from '../service/employees.service';
import { Employee } from '../model/employee.model';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
    @Input() employee: Employee ={
      FullName: '',
      ShortName: '',
      Id: 0
    };
    constructor(private employeeService: EmployeesService){}
    requestModelUpdateEmployee = this.employee;
    ngOnInit(): void {
    }
    updateEmployee(){
      this.employeeService.updateEmployee(this.requestModelUpdateEmployee)
          .subscribe({
            next: (response) => {
              console.log(response);
            }
          })
    }
}