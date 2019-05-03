import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http'

@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }

getEmployeeData(){
  return this.http.get('http://localhost:4000/getEmployee')
 }
 postData(data){
  return this.http.post('http://localhost:4000/addEmployee',data)
  
 }



}
