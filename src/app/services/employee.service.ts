import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Employee } from '../models/employee.model';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

  private _url : 'http://localhost:3000/api/employees';

  selectedEmployee : Employee;
  EmployeeList : Employee[];
  constructor(private http : Http) { }

  getEmployees() {
    this.http.get(this._url)
        .map((data: Response) => {
          return data.json() as Employee[];
        }).toPromise().then(x => {
          this.EmployeeList = x;
        });
  }

  getEmployee(_id: String) {
    this.http.get(this._url + '/' + _id)
    .map((data: Response) => {
      return data.json() as Employee;
    }).toPromise().then(x => {
      this.selectedEmployee = x;
    });
  }


}
