import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeInterface } from '../../models/employe';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employees!: EmployeeInterface[];
  constructor(public serviceEmployee: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees() {
    this.serviceEmployee.getEmployees().subscribe(
      (resp) => (this.serviceEmployee.employees = resp),
      (err) => console.log('Error')
    );
  }
  addEmployee(form: NgForm) {
    console.log(form.value);
    if (form.value._id) {
      console.log('Actualizando');
      this.serviceEmployee.putEmployee(form.value).subscribe(
        (resp) => {
          this.reset(form);
          this.getEmployees();
        },
        (err) => console.log(err)
      );
    } else {
      this.serviceEmployee.postEmployees(form.value).subscribe(
        (resp) => {
          console.log(resp);

          this.reset(form);
          this.getEmployees();
        },
        (err) => console.log(err)
      );
    }
  }
  delete(id: string) {
    const resp = confirm('Seguro quieres eliminarlo');
    console.log(resp);
    if (resp) {
      this.serviceEmployee.deleteEmployee(id).subscribe(
        (resp) => {
          this.getEmployees();
          console.log('Deleted');
        },
        (err) => console.log(err)
      );
    }
  }
  edit(employee: EmployeeInterface) {
    console.log(employee);
    this.serviceEmployee.selectedEmployee = employee;
  }
  reset(form: NgForm) {
    form.reset();
  }
}
