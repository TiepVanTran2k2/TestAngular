import { Component, Input } from '@angular/core';
import { EmployeesService } from '../service/employees.service';
import { Employee } from '../model/employee.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent {
    constructor(private route: ActivatedRoute, 
                private employeeService: EmployeesService,
                private router: Router){}
    requestModelUpdateEmployee: Employee = {
      FullName: '',
      ShortName: '',
      Id: 0
    };
    ngOnInit(): void {
      this.route.paramMap.subscribe({
        next: (params) => {
          const id = params.get('id');
          if(id){
            this.employeeService.getEmployee(Number.parseInt(id))
                .subscribe({
                  next: (response) => {
                      this.requestModelUpdateEmployee = response;
                      this.requestModelUpdateEmployee.Id = Number.parseInt(id);
                      console.log(this.requestModelUpdateEmployee);
                  }
                })
          }
        }
      })
    }
    updateEmployee(){
      this.employeeService.updateEmployee(this.requestModelUpdateEmployee)
          .subscribe({
            next: (response) => {
              console.log(response);
              this.router.navigate(['employee'])
            }
          })
    }
}