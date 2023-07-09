import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { gantt } from 'dhtmlx-gantt';
import { task } from 'src/app/model/task.model';
import { TaskService } from 'src/app/service/task.service';
import { TaskFieldsModel } from '@syncfusion/ej2-angular-gantt';
@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-gantt',
  templateUrl: './gantt.component.html',
  styleUrls: ['./gantt.component.css']
})
export class GanttComponent {
  task: task[] = [];
  constructor(private taskService: TaskService) { }
  @ViewChild("taskObject")
  public taskObject: TaskFieldsModel | undefined;
  public dataTask: Object[] = [];
  public taskSettings: object = {
    Id: "TaskID",
    IDparent: "IDparent",
    Label: "Label",
    Type: "Type",
    Name: "Name",
    StartDate: "StartDate",
    EndDate: "EndDate",
    Duration: "Duration",
    Progress: "Progress",
    IsUnscheduled: "IsUnscheduled"
  };
  ngOnInit(){
    this.taskService.getAllTask()
      .subscribe({
        next: (task) => {
          this.dataTask = task;
        },
        error: (response) => {
          console.log(response);
        }
      })
  }
}
