import {Component, OnInit} from '@angular/core';
import {UserService} from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'career-wase';
  userName: String;

  AppComponent( userSrvice: UserService ) {
  }

}
