import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public isUserLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
}
