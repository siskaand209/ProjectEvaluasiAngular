import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './page/home/home.component';
import { RolesComponent } from './page/roles/roles.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'roles', component: RolesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, RolesComponent];
