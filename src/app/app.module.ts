import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './page/employees/employees.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, EmployeeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
