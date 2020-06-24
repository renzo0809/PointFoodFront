import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { LogInComponent } from './log-in/log-in.component';
import { FavoritosComponent } from './favoritos/favoritos.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const routes: Routes = [
  {path:'',component:PortadaComponent},
  {path:'favoritos',component:FavoritosComponent},
  {path:'login',component:LogInComponent},
  {path:'register',component:RegisterComponent},
  {path:'dashboard',component:DashboardComponent},
  //para pruebas
  {path:'dashboard/:name',component:RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
