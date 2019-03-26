import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {UserService} from '../../Services/user.service';
import {DataShareService} from '../../Services/data-share.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnChanges {
  userName: string;

  constructor(protected userSvc: UserService,
              protected dataShareService: DataShareService) {
    this.userSvc.isUserLoggedIn$.subscribe((value) => {
      this.userName = this.userSvc.getUserName();
    });
  }

  ngOnInit() {
    this.userSvc.isUserLoggedIn$.subscribe((value) => {
      this.userName = this.userSvc.getUserName();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.userSvc.isUserLoggedIn$.subscribe((name) => {
      alert('dddd');
      this.userName = name;
    });
  }

}
