import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeCreditComponent } from './employee-credit/employee-credit.component';
import { EmployeeCreditListComponent } from './employee-credit-list/employee-credit-list.component';

export const routes: Routes = [
  { path: 'employee-register', component: EmployeeRegisterComponent },
  { path: 'employee-credit', component: EmployeeCreditComponent },
  { path: 'employee-credit-list', component: EmployeeCreditListComponent },
  { path: '', redirectTo: '/employee-credit-list', pathMatch: 'full' }
];
