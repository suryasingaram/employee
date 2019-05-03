import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import {DataService} from './services/data.service';
import { FilterPipe } from './filter.pipe';
import {MatButtonModule, MatTableModule,MatPaginatorModule, MatFormFieldModule,MatNativeDateModule, MatAutocompleteModule, MatInputModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component'
@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    EmployeeComponent,
    EmployeeListComponent
    
  ],
  imports: [
    MatDatepickerModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,ReactiveFormsModule,BrowserAnimationsModule,MatNativeDateModule,
    MatButtonModule,MatTableModule, MatPaginatorModule, MatFormFieldModule, MatAutocompleteModule, MatInputModule
  ],
  bootstrap: [AppComponent],
  providers:[DataService]
})
export class AppModule { }
