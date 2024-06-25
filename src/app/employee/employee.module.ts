import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [ EmployeeComponent ]
})
export class EmployeeModule { }
