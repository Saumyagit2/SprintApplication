import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {Session} from '../modal/session'
import { SubtaskListComponent} from '../subtask-list/subtask-list.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-sub-task',
  templateUrl: './sub-task.component.html',
  styleUrls: ['./sub-task.component.css']
})
export class SubTaskComponent implements OnInit {
  sessionForm!: FormGroup;
  constructor(private router:Router,private sessionService:SessionService ) { }

  // ngOnInit()
  // {

  // }
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
  addToList(){
    const session:Session = {
      taskname : this.taskname.value,
      description : this.description.value,
      start : this.start.value,
      end: this.end.value
    }
    this.sessionService.addSessions(session);
    this.router.navigateByUrl('/subtask-list');
  }
  
  deleteSession(sessionToDelete: Session){
    this.sessionService.deleteSession(sessionToDelete) 
  }
}
  
  
  





