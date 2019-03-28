import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-card-category',
  templateUrl: './card-category.component.html',
  styleUrls: ['./card-category.component.scss']
})
export class CardCategoryComponent implements OnInit {
  form: FormGroup;
  @Input() name: string;
  @Input() imgPath: string;
  filteredOptions: Observable<string[]>;
  options: string[] = this.getEntitelmentList();
  myControl = new FormControl();

  constructor(protected fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      entitlement: new FormControl('', null),
    });
    this.initEntitlementAutoComplete();
  }
  initEntitlementAutoComplete() {
    this.filteredOptions = this.form.get('entitlement').valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getEntitelmentList() {
    return ['Developer', 'QA', 'Product Owner', 'Product Manager',
                  'BA', 'UX', 'Analyst', 'Team Leader', 'Tech Writer'];
  }
}
