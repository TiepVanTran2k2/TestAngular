import { Component } from '@angular/core';
import { empty } from 'rxjs';
import { task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  constructor(private taskService: TaskService){}
  requestModelAddTask: task = {
    Name: '',
    Duration: 0,
    EndDate: new Date,
    StartDate: new Date,
    IsUnscheduled: true,
    Label: 'test',
    Progress: 0,
    Type: 0,
    Id: 0,
    IDparent: 0
  }
  ngOnInit(): void{

  }
  addTask(){
    this.taskService.addTask(this.requestModelAddTask)
        .subscribe({
          next: (task) =>{
            console.log(task);
          }
        })
  }
}
