import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DashboardComponent} from '../../Components/dashboard/dashboard.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{
      path: '',
      component: DashboardComponent
    }])
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
