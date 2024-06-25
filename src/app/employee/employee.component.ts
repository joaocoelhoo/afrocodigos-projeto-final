import { Component, OnInit } from '@angular/core';
import { DataService, Employee } from '../data.service';

@Component({
	selector: 'app-employee',
	templateUrl: './employee.component.html',
	styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {
	employees: Employee[] = [];
	
	constructor(private dataService: DataService) {}

	ngOnInit(): void {
		this.loadEmployees();
	  }

	  loadEmployees(): void {
		this.dataService.get<Employee>().subscribe((data) => {
		  this.employees = data;
		});
	  }

	  deleteEmployee(id: number): void {
		this.dataService.delete(id).subscribe(() => {
		  this.loadEmployees();
		});
	  }

}
