import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface Employee {
  id: number;
  name: string;
  creditBalance: number;
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {

  private employees: Employee[] = [
    { id: 1, name: 'John Doe', creditBalance: 150 },
    { id: 2, name: 'Jane Smith', creditBalance: 200 },
    { id: 3, name: 'Michael Brown', creditBalance: 100 }
  ];

  constructor() { }

  getEmployees(): Observable<Employee[]> {
    return of(this.employees);
  }
}
