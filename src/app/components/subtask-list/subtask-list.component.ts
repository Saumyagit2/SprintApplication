import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {Session} from '../modal/session'
import {EmployeeService} from '../employee.service';
import { SubTaskComponent} from '../sub-task/sub-task.component';
@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.css']
})
export class SubtaskListComponent implements OnInit {

  sessionItems!: Session[];

  constructor(private router:Router,private sessionService:SessionService, private service:EmployeeService,private dialog:MatDialog) { }

  ngOnInit():void {
    this.sessionItems = this.sessionService.getSessions();
 
  }


  addSession(){
    this.dialog.open(SubTaskComponent, {
      width:'300px'
    });
  }

 
  

  deleteSession(session:Session){
    if(this.sessionService.deleteSession(session)){
      return this.sessionService.getSessions();
    }
    return this.sessionService.getSessions();
  }

 

}
