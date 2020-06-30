import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogInAdminComponent } from './log-in-admin/log-in-admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatTabsModule } from "@angular/material/tabs";
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ClientCreateComponent} from './client-create/client-create.component';
import { RestaurantCreateComponent } from './restaurant-create/restaurant-create.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { OwnerCreateComponent } from './owner-create/owner-create.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { ClientListComponent } from './client-list/client-list.component';


@NgModule({
  declarations: [LogInAdminComponent, DashboardComponent,RestaurantCreateComponent,RestaurantListComponent,ClientListComponent,
  OwnerCreateComponent,OwnerListComponent, ClientCreateComponent],
  imports: [
    MatTabsModule,
    MatTableModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(
      [
        {path:'login',component:LogInAdminComponent},
        {path:'dashboard',component:DashboardComponent}
      ]
    )
  ]
})
export class AdminModule { }
