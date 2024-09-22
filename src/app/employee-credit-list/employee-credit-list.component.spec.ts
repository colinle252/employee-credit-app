import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreditListComponent } from './employee-credit-list.component';

describe('EmployeeCreditListComponent', () => {
  let component: EmployeeCreditListComponent;
  let fixture: ComponentFixture<EmployeeCreditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreditListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
