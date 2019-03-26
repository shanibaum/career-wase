import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'sign-in',
        loadChildren: './Modules/sign-in/sign-in.module#SignInModule'
      },
      {
        path: 'categories',
        loadChildren: './Modules/categories/categories.module#CategoriesModule'
      },
      {
        path: 'paths',
        loadChildren: './Modules/paths/paths.module#PathsModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
