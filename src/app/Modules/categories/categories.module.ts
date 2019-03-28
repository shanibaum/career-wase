import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {CareerCategoriesComponent} from '../../Components/career-categories/career-categories.component';
import {CardComponent} from '../../Components/card/card.component';
import {MaterialModule} from '../material/material.module';
import {CardCategoryComponent} from '../../Components/cards/card-category/card-category.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatChipsModule} from '@angular/material';

@NgModule({
  declarations: [
    CareerCategoriesComponent,
    CardComponent,
    CardCategoryComponent,
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatChipsModule,
    RouterModule.forChild([{
      path: '',
      component: CareerCategoriesComponent
    }])
  ],
})
export class CategoriesModule { }
