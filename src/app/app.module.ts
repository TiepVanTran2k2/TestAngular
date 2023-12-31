import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HousingLocationComponent } from './housing-location/housing-location.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { HomeComponent } from './home/home.component';
import { TaskAddComponent } from './task/task-add/task-add.component';
import { GanttComponent } from './gantt/gantt.component';
import { GanttModule } from '@syncfusion/ej2-angular-gantt';
@NgModule({
  
  declarations: [
    AppComponent, EmployeeListComponent, EmployeeAddComponent, EmployeeUpdateComponent, TaskListComponent, HomeComponent, TaskAddComponent, GanttComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    GanttModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
