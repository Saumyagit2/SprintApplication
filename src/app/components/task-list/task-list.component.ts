import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import {Session} from '../modal/session'
import {Router} from '@angular/router';
import {EmployeeService} from '../employee.service';
import {TaskUpdateComponent} from '../task-update/task-update.component'
import { PrimaryTask } from '../modal/PrimaryTask';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks:any;
  status: boolean = false;
  sessionItems!: Session[];
  constructor(private service:EmployeeService,private sessionService:SessionService, private dialog:MatDialog,private router:Router) { }
  ngOnInit(): void {
    this.sessionItems = this.sessionService.getSessions();
    let response = this.service.getAllTasks();
    response.subscribe(
      data=>this.tasks=data
      );
     
     }
     // console.log(this.tasks);
  
  updateTask(i:number){
    this.dialog.open(TaskUpdateComponent, {
      width:'300px',    
      data:{
        taskName : this.tasks[i].taskName,
        description:this.tasks[i].description,
        startDate:this.tasks[i].startDate,
        endDate:this.tasks[i].endDate,
        index:i,
        taskId:this.tasks[i].taskId
      }     
    });
    this.sessionItems = this.sessionService.getSessions();
  }
//  update(task:PrimaryTask){
//      let response = this.service.updateTask(task);
//         response.subscribe(data=>this.tasks=data);
//  }
   
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
    

//     // let response = this.service.updateTask(task);
//     //    response.subscribe(data=>this.tasks=data);
//   }
  deleteSession(session:Session){
    if(this.sessionService.deleteSession(session)){
      return this.sessionService.getSessions();
    }
    return this.sessionService.getSessions();
  }
addTask()
{
  this.router.navigateByUrl('/add-task');
}
   removeTask(id:number)
   {
       let response = this.service.deleteTaskByid(id);
       response.subscribe(data=>this.tasks=data);
       //this.router.navigateByUrl('/task-list');
   }
}
