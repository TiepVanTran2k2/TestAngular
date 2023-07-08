import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Employee, employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl: string  = environment.baseApiUrl;
  constructor(private http: HttpClient) { } 
  getAllEmployee(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + "Staff")
  }
  addEmployee(requestModelAddEmployee: employee): Observable<employee>{
    return this.http.post<employee>(this.baseUrl + "Staff", requestModelAddEmployee);
  }
  updateEmployee(requestModelAddEmployee: Employee): Observable<boolean>{
    return this.http.put<boolean>(this.baseUrl + "Staff", requestModelAddEmployee)
  }
  getEmployee(id: number): Observable<Employee>{
    return this.http.get<Employee>(this.baseUrl + "Staff/" + id);
  }
}
