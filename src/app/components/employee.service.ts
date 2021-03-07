import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  public AuthenticateEmployee(email)
  {
    return this.http.get("http://localhost:8080/search/"+email);
  }
  public addPrimaryTask(task)
  {
    return this.http.post("http://localhost:8080/addPrimary",task,{responseType : "text" as "json"});
  }
  public getAllTasks()
  {
    return this.http.get("http://localhost:8080/all-Tasks/");
  }
  public deleteTaskByid(id)
  {
      return this.http.get("http://localhost:8080/delete/"+id);
  }
}
