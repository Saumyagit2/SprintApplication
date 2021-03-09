import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskserviceService {

  tasks:any;

  constructor() { }
  
  getTasks()
  {
     return this.tasks;
  }
  setTasks(tasks)
  {
     this.tasks = tasks;
  }



}



