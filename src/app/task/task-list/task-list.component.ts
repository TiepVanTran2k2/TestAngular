import { Component } from '@angular/core';
import { task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  task: task[] = [];
  constructor(private taskService: TaskService){}
  ngOnInit(): void {
    
    this.taskService.getAllTask()
        .subscribe({
          next: (task) =>{
            this.task = task;
          },
          error: (response) => {
            console.log(response);
          }
        })
  }
}
