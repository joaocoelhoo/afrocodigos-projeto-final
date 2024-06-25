import { Component, OnInit } from '@angular/core';
import { DataService, Employee } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
	employee: Omit<Employee, "id"> = { name: '', position: '' };

	constructor(
		private	dataService: DataService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
	}

	register(): void{
		this.dataService.post<Employee>(this.employee).subscribe(() => {
			this.employee = { name: '', position: '' };
		});
	}
}
