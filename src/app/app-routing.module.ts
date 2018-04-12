import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { HomeComponent } from './page/home/home.component';
import { RolesComponent } from './page/roles/roles.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'roles', component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
=======
<<<<<<< HEAD
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './page/employees/employees.component';

const routes: Routes = [
  {path: 'employees', component: EmployeesComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [EmployeesComponent]
=======
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './page/home/home.component';
import { MenuaccessComponent } from './page/menuaccess/menuaccess.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'menuaccess', component: MenuaccessComponent}
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
>>>>>>> 37f4de2ec52b7e250328f1a90a531bd40c4e6697
})

export class AppRoutingModule { }
<<<<<<< HEAD

export const routingComponents = [HomeComponent, RolesComponent];
=======
export const routingComponents = [
             HomeComponent,
             MenuaccessComponent
]
>>>>>>> d0f3cd48de168c729e60465c875d733407d591aa
>>>>>>> 37f4de2ec52b7e250328f1a90a531bd40c4e6697
