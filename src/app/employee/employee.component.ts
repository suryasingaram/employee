import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "../services/data.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import {
  MatAutocompleteSelectedEvent,
  MatPaginator,
  MatTableDataSource
} from "@angular/material";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  response: any = [];
  formControl: FormGroup;
  data: any;
  validationError: boolean = false;

  maxDate = new Date();
  constructor(private router: Router,private service: DataService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formControl = this.formBuilder.group({
      employeeId: ["", Validators.required],
      address: "",
      employeeName: ["", Validators.required],
      designation: "",
      nationality: "",
      phoneNo: ["", Validators.required],
      dob: ["", Validators.required]
    });
  }
  numberOnly(event): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

 

  addEmployee() {
    if (this.formControl.status == "INVALID") {
      this.validationError = true;
      return;
    } else {
      this.service.postData(this.formControl.value).subscribe(res => {
        this.response=res;
        alert( this.response.message)
        this.router.navigate(['employee-list']);
      });
    }
  }

}
