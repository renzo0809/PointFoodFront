import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './log-in/log-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import{ FavoritosComponent } from './favoritos/favoritos.component'

@NgModule({
  declarations: [RegisterComponent, LogInComponent, DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'register',component:RegisterComponent},
      {path:'login',component:LogInComponent},
      {path:'dashboard',component:DashboardComponent},
      {path:'favoritos',component:FavoritosComponent},
    ])
  ]
})
export class UserModule { }
