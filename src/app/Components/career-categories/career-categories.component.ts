import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-career-categories',
  templateUrl: './career-categories.component.html',
  styleUrls: ['./career-categories.component.scss']
})
export class CareerCategoriesComponent implements OnInit {

  private categories: Array<string> =  this.getCategories();

  constructor( protected userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.isUserLoggedIn$.next(this.userSvc.getUserName());
  }
  private getCategories() {
    return ['Hi Tech', 'Accounting', 'Hospitality', 'Government', 'Design',
    'Insurance', 'Sales & Marketing', 'Finance', 'Education'];
  }
}
