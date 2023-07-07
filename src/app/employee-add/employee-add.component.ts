import { Component } from '@angular/core';
import { employee } from '../model/employee.model';
import { EmployeesService } from '../service/employees.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  constructor(private employeesService: EmployeesService){}
  requestModelAddEmployee: employee = {
    FullName: '',
    ShortName: ''
  }
  ngOnInit(): void {
    
  }
  addEmployee(){
    this.employeesService.addEmployee(this.requestModelAddEmployee)
        .subscribe({ 
          next: (employee) => {
            console.log(employee);
          }
        })
  }
}
