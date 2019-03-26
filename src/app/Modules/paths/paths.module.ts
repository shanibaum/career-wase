import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {PathsComponent} from '../../Components/paths/paths.component';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDividerModule, MatProgressSpinnerModule} from '@angular/material';
import {PathComponent} from '../../Components/path/path.component';

@NgModule({
  declarations: [
    PathsComponent,
    PathComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CommonModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    RouterModule.forChild([{
      path: '',
      component: PathsComponent
    }])
  ],
})
export class PathsModule { }
