import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

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
  providers: [
      {provide: APP_BASE_HREF, useValue: '/'} 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
