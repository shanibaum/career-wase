import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../../Services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public signInForm: FormGroup;
  public isSignInForm = true;

  constructor(protected fb: FormBuilder, protected router: Router,
              protected userSvc: UserService) {

  }

  ngOnInit() {
    this.signInForm = this.fb.group({
      userName: new FormControl('', null),
      password: new FormControl('', null),
    });
  }
  public onSubmit() {
    this.userSvc.setUserName(this.signInForm.get('userName').value);
    this.router.navigate(['/categories']);
  }

}
