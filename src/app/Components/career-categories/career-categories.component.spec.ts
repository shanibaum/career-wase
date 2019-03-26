import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerCategoriesComponent } from './career-categories.component';

describe('CareerCategoriesComponent', () => {
  let component: CareerCategoriesComponent;
  let fixture: ComponentFixture<CareerCategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerCategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
