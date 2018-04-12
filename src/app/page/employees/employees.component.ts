import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  modalRef: BsModalRef;
  

  constructor(private employeeService: EmployeeService, private modalService: BsModalService) { }

  ngOnInit() {
    
  }

}
