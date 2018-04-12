import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
})
export class AppRoutingModule { }
export const routingComponents = [
             HomeComponent,
             MenuaccessComponent
]