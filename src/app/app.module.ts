import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeesComponent } from './page/employees/employees.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmployeeService } from './services/employee.service';
import { AppRoutingModule } from './app-routing.module';
=======

import { AppComponent } from './app.component';
import { routingComponents, AppRoutingModule } from './app-routing.module';
import { HttpClient } from 'selenium-webdriver/http';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';


import { EmployeesComponent } from './page/employees/employees.component';
import { HomeComponent } from './page/home/home.component';
import { MenuaccessComponent } from './page/menuaccess/menuaccess.component';
>>>>>>> d0f3cd48de168c729e60465c875d733407d591aa


@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    HomeComponent,
    MenuaccessComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
<<<<<<< HEAD
  providers: [{provide: APP_BASE_HREF, useValue: '/'}, EmployeeService ],
=======
  providers: [
      {provide: APP_BASE_HREF, useValue: '/'} 
  ],
>>>>>>> d0f3cd48de168c729e60465c875d733407d591aa
  bootstrap: [AppComponent]
})
export class AppModule { }
