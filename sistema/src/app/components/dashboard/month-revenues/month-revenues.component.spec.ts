import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthRevenuesComponent } from './month-revenues.component';

describe('MonthRevenuesComponent', () => {
  let component: MonthRevenuesComponent;
  let fixture: ComponentFixture<MonthRevenuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthRevenuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthRevenuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
