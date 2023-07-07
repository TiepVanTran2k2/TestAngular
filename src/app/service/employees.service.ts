import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { employee } from '../model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseUrl: string  = environment.baseApiUrl;
  constructor(private http: HttpClient) { } 
  getAllEmployee(): Observable<employee[]>{
    return this.http.get<employee[]>(this.baseUrl + "Staff")
  }
  addEmployee(requestModelAddEmployee: employee): Observable<employee>{
    return this.http.post<employee>(this.baseUrl + "Staff", requestModelAddEmployee);
  }
}
