import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCreditComponent } from './employee-credit.component';

describe('EmployeeCreditComponent', () => {
  let component: EmployeeCreditComponent;
  let fixture: ComponentFixture<EmployeeCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCreditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
