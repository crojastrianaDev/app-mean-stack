import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeInterface } from '../models/employe';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  URL_API = 'http://localhost:4000/api/employees/';
  employees?: EmployeeInterface[];
  selectedEmployee: EmployeeInterface = {
    name: '',
    position: '',
    office: '',
    salary: 0,
  };
  constructor(private httpC: HttpClient) {}

  getEmployees() {
    return this.httpC.get<EmployeeInterface[]>(this.URL_API);
  }
  postEmployees(employee: EmployeeInterface) {
    return this.httpC.post(this.URL_API, employee);
  }
  deleteEmployee(id: string) {
    return this.httpC.delete(`${this.URL_API}/${id}`);
  }
  putEmployee(employee: EmployeeInterface) {
    console.log(employee);

    return this.httpC.put(this.URL_API + `/${employee._id}`, employee);
  }
}
