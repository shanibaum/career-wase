// import {Component, EventEmitter, OnInit, Output} from '@angular/core';
// import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';
// import {UserService} from '../../Services/user.service';
// import {Router} from '@angular/router';
// import {DataShareService} from '../../Services/data-share.service';
//
//
// @Component({
//   selector: 'app-sign-up',
//   templateUrl: './sign-up.component.html',
//   styleUrls: ['./sign-up.component.scss']
// })
// export class SignUpComponent implements OnInit {
//   public profileForm: FormGroup;
//   options: string[] = ['Student', 'Teacher', 'QA'];
//   filteredOptions: Observable<string[]>;
//   hobbies: string[];
//   @Output() onLogin = new EventEmitter();
//
//   constructor(protected fb: FormBuilder, protected userService: UserService,
//               protected router: Router, protected dataShareService: DataShareService) { }
//
//   ngOnInit() {
//     this.profileForm = this.fb.group({
//       firstName: new FormControl('', null),
//       lastName: new FormControl('', null),
//       email: new FormControl('', null),
//       password: new FormControl('', null),
//       age: new FormControl('', null),
//       entitlement: new FormControl('', null),
//       hobby: new FormControl('', null), // todo Multiple selection
//       satGrade: new FormControl('', null),
//       bagrutGrade: new FormControl('', null),
//     });
//     this.initEntitlementAutoComplete();
//     this.initilizeHobbyMultiSeletionList();
//   }
//
//   initEntitlementAutoComplete() {
//     this.filteredOptions = this.profileForm.get('entitlement').valueChanges
//       .pipe(
//         startWith(''),
//         map(value => this._filter(value))
//       );
//   }
//
//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();
//
//     return this.options.filter(option => option.toLowerCase().includes(filterValue));
//   }
//
//   initilizeHobbyMultiSeletionList() {
//     this.hobbies  = ['Music', 'Programming', 'Painting', 'Sport', 'Cook', 'Dance'];
//   }
//
//   do() {
//     this.userService.setUserName(this.profileForm.get('firstName').value);
//     this.userService.isUserLoggedIn$.next('shani');
//     // this.router.navigateByUrl('/categories');
//   }
// }
