import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs'
import { task } from '../model/task.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  baseUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }
  getAllTask(): Observable<task[]>{
    return this.http.get<task[]>(this.baseUrl + "Task")
  };
  
}
