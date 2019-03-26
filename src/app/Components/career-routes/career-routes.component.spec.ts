import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerRoutesComponent } from './career-routes.component';

describe('CareerRoutesComponent', () => {
  let component: CareerRoutesComponent;
  let fixture: ComponentFixture<CareerRoutesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerRoutesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerRoutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
