import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import {Session} from '../modal/session'
import {Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {TaskUpdateComponent} from '../task-update/task-update.component'
import { PrimaryTask } from '../modal/PrimaryTask';
import {SubTaskComponent} from '../sub-task/sub-task.component';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:any;
  sessionItems!: Session[];
  constructor(private service:EmployeeService,private sessionService:SessionService, private dialog:MatDialog,private router:Router) { }
  ngOnInit(): void {
    this.sessionItems = this.sessionService.getSessions();
    let response = this.service.getAllTasks();
    response.subscribe(
      data=>this.tasks=data
      );
     // console.log(this.tasks);
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

addSubTask()
{
  this.router.navigateByUrl('/sub-task');
}

   removeTask(id:number)
   {
       let response = this.service.deleteTaskByid(id);
       response.subscribe(data=>this.tasks=data);
       //this.router.navigateByUrl('/task-list');
   }
   addTask()
   {
    this.router.navigateByUrl('/add-task');

   }
}
