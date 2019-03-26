import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SignInComponent} from '../../Components/sign-in/sign-in.component';
import {MaterialModule} from '../material/material.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild([{
      path: '',
      component: SignInComponent
    }])
  ]
})
export class SignInModule { }
