import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-paths',
  templateUrl: './paths.component.html',
  styleUrls: ['./paths.component.scss']
})
export class PathsComponent implements OnInit {
  showPath = false;
  paths: Object;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe((data: Array<object> ) => {
      this.paths = data;
      this.showPath = true;
    });
  }
  ngOnInit() {
  }
  public getJSON(): Observable<any> {
    return this.http.get('./../../assets/paths.json');
  }
}
