import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {Session} from '../modal/session'
import { SubtaskListComponent} from '../subtask-list/subtask-list.component';
import { ThrowStmt } from '@angular/compiler';
import {SubTask} from '../modal/SubTask';
import {EmployeeService} from '../employee.service';
@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent implements OnInit {
  sessionForm!: FormGroup;
  message:any;
  task:SubTask;
 
  constructor(private router:Router,private sessionService:SessionService,private service:EmployeeService ) { }

  ngOnInit(): void{
    this.sessionForm = new FormGroup({
   //   taskname : new FormControl('', Validators.required),
      taskname : new FormControl(''),
      description : new FormControl('', Validators.required),
      start : new FormControl(''),
      end : new FormControl('')
    });

  }
  get taskname() {
    return this.sessionForm.get('taskname') as FormControl;
  }

  get description() {
    return this.sessionForm.get('description') as FormControl;
  }
  get start() {
    return this.sessionForm.get('start') as FormControl;
  }
  get end() {
    return this.sessionForm.get('end') as FormControl;
  }
  // addToList(){
  //   const session:Session = {
  //     taskname : this.taskname.value,
  //     description : this.description.value,
  //     start : this.start.value,
  //     end: this.end.value
  //   }
  //   this.sessionService.addSessions(session);
  //   this.router.navigateByUrl('/subtask-list');
  // }
  addToList()
  {
    const session :Session = {
      taskname : this.taskname.value,
      description : this.description.value,
      start: this.start.value,
      end: this.end.value
    }
    //console.log(this.user.name);
    const temp_task:SubTask = {
      subtaskName : this.taskname.value,
      description : this.description.value,
      employeeId:1,
      startDate: this.start.value,
      endDate: this.end.value,
      estimatedHours :20,
      creatorId:1,
      modifierId:1
    }
    this.task=temp_task;
    let response =   this.service.addSubTask(this.task);
        response.subscribe(data => {
          this.message =   data;
          
          console.log(this.message);
        })
    this.sessionService.addSessions(session);
    console.log(session);
    this.router.navigateByUrl('/subtask-list');
  }
  
  deleteSession(sessionToDelete: Session){
    this.sessionService.deleteSession(sessionToDelete) 
  }
}
  
  
  





