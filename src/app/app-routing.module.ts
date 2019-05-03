import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'


const routes: Routes = [
  {path:'',redirectTo:'employee-data',pathMatch:'full'},
  {path:'employee-data',component:EmployeeComponent},
  {path:'employee-list',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
