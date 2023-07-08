import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { TaskListComponent } from './task/task-list/task-list.component';
const routes: Routes = [
  {
    path: 'employee',
    component: EmployeeListComponent
  },
  {
    path: 'employee/edit/:id',
    component: EmployeeUpdateComponent
  },
  {
    path: 'task',
    component: TaskListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
