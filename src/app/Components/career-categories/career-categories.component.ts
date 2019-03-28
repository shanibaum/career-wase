import { Component, OnInit } from '@angular/core';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-career-categories',
  templateUrl: './career-categories.component.html',
  styleUrls: ['./career-categories.component.scss']
})
export class CareerCategoriesComponent implements OnInit {

  private categories: Array<Object> =  this.getCategories();
  constructor( protected userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.isUserLoggedIn$.next(this.userSvc.getUserName());
  }
  private getCategories() {
  return [
    { 'path': '../../../../assets/images/hitech.jpg', 'name': 'Hi Tech' },
    { 'path': '../../../../assets/images/Finance.jpg', 'name': 'Finance' },
    { 'path': '../../../../assets/images/Health.jpg', 'name': 'Health' },
    { 'path': '../../../../assets/images/Government.jpg', 'name': 'Government' },
    { 'path': '../../../../assets/images/decor.jpg', 'name': 'Decor' },
    { 'path': '../../../../assets/images/Insurance.jpg', 'name': 'Insurance' },
    { 'path': '../../../../assets/images/SalesMarketing.jpg', 'name': 'Sales & Marketing' },
    { 'path': '../../../../assets/images/Science.jpg', 'name': 'Science' },
    { 'path': '../../../../assets/images/Education.jpg', 'name': 'Education' },
  ];
  }
}
