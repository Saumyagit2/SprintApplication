import { Component, OnInit } from '@angular/core';
import { TaskserviceService} from '../services/taskservice.service';
import {EmployeeService} from '../components/employee.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   taskname :string;
   task:any;
  constructor(private taskservice:TaskserviceService, private service:EmployeeService,private router:Router) { }

  ngOnInit() {
  }
  public findByTaskName()
  {
    let response=this.service.getTaskByTaskName(this.taskname);
    response.subscribe(data=>this.task=data);
  }
  goBack()
  {
    this.router.navigateByUrl('/task-list');
  }

}
