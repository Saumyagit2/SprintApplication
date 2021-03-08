import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {Session} from '../modal/session'
import {EmployeeService} from '../employee.service';
import { SubTaskComponent} from '../sub-task/sub-task.component';
import {SubtaskUpdateComponent} from '../subtask-update/subtask-update.component';
@Component({
  selector: 'app-subtask-list',
  templateUrl: './subtask-list.component.html',
  styleUrls: ['./subtask-list.component.css']
})
export class SubtaskListComponent implements OnInit {
    subtasks:any;
  sessionItems!: Session[];

  constructor(private router:Router,private sessionService:SessionService, private service:EmployeeService,private dialog:MatDialog) { }

  ngOnInit():void {
    let response = this.service.getAllSubTasks();
    response.subscribe(
      data=>this.subtasks=data
      );
      console.log(this.subtasks);
      
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
  // updateSession(i:number){
  //   this.dialog.open(TaskUpdateComponent, {
  //     width:'300px',
  //     data: { taskname: this.sessionService.sessionItems[i].taskname, 
  //              description: this.sessionService.sessionItems[i].description,
  //              start: this.sessionService.sessionItems[i].start,
  //              end: this.sessionService.sessionItems[i].end,  
  //             index:i
  //          },        
  //   });
   
  // }
  updateSession(i:number){
    this.dialog.open(SubtaskUpdateComponent, {
      width:'300px',
      data: { taskname: this.sessionService.sessionItems[i].taskname, 
               description: this.sessionService.sessionItems[i].description,
               start: this.sessionService.sessionItems[i].start,
               end: this.sessionService.sessionItems[i].end,  
              index:i
           },        
    });
    //this.router.navigateByUrl('/subtask-update');
  
   
  }

}
