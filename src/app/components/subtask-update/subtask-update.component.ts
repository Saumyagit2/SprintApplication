import { Component,Inject, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import {Session} from '../modal/session'
import { SubtaskListComponent } from '../subtask-list/subtask-list.component';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-task-update',
  templateUrl: './subtask-update.component.html',
  styleUrls: ['./subtask-update.component.css']
})

export class SubtaskUpdateComponent implements OnInit {
  sessionForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: {taskname: string,description:string,start:string,end:string,index:number}, 
  private sessionService: SessionService,private router:Router, private dialogRef:MatDialogRef<SubtaskListComponent>) { }

ngOnInit(): void {
this.sessionForm = new FormGroup({
taskname : new FormControl(this.data.taskname, Validators.required),
description : new FormControl(this.data.description, Validators.required),
start : new FormControl(this.data.start),
end: new FormControl(this.data.end)
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

updateValue(){
const session:Session = {
taskname : this.taskname.value,
description : this.description.value,
start: this.start.value,
end: this.end.value
}
this.sessionService.updateSession(this.data.index,session);
this.router.navigateByUrl('/subtask-list');
  
//this.dialogRef.close();
}

}
