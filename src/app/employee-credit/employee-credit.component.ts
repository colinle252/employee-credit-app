import { Component, OnInit } from '@angular/core';
import { EmployeeDataService } from '../employee-data.service';

interface Employee {
  id: number;
  name: string;
  creditBalance: number;
}

@Component({
  selector: 'app-employee-credit',
  templateUrl: './employee-credit.component.html',
  styleUrls: ['./employee-credit.component.scss']
})
export class EmployeeCreditComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeDataService: EmployeeDataService) { }

  ngOnInit(): void {
    this.employeeDataService.getEmployees().subscribe(data => {
      this.employees = data;
    });
  }
}
