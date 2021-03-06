import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import {Session} from '../modal/session'
import {Router} from '@angular/router';
import {TaskUpdateComponent} from '../task-update/task-update.component'
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  sessionItems!: Session[];
  constructor(private sessionService:SessionService, private dialog:MatDialog,private router:Router) { }
  ngOnInit(): void {
    this.sessionItems = this.sessionService.getSessions();
  }
  updateSession(i:number){
    this.dialog.open(TaskUpdateComponent, {
      width:'300px',
      data: { taskname: this.sessionService.sessionItems[i].taskname, 
               description: this.sessionService.sessionItems[i].description,
               start: this.sessionService.sessionItems[i].start,
               end: this.sessionService.sessionItems[i].end,  
              index:i
           },        
    });
   
  }
  deleteSession(session:Session){
    if(this.sessionService.deleteSession(session)){
      return this.sessionService.getSessions();
    }
    return this.sessionService.getSessions();
  }


}