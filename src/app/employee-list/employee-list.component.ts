import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator,MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor(private service: DataService) {}
  
  dataSource;
  displayedColumns = [];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: "employeeId",
    value: "Employee Id"

  }, {
    id: "employeeName",
    value: "Employee Name"
  },
  {
    id: "designation",
    value: "Designation"
  },
  {
    id: "address",
    value: "Address"
  },
  {
    id: "nationality",
    value: "Nationality"
  },
  {
    id: "phoneNo",
    value: "Phone No"
  },
  {
    id: "dob",
    value: "DOB"
  }
];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;}
    response;
  createTable() {
    this.service.getEmployeeData().subscribe((res)=>{
      this.response =res;
      this.dataSource=new MatTableDataSource(this.response)
    })

  }

}

