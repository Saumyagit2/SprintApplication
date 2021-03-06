import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SessionService } from '../session.service'
import {Session} from '../modal/session'

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  sessionItems!: Session[];
  constructor(private sessionService:SessionService, private dialog:MatDialog) { }
  ngOnInit(): void {
    this.sessionItems = this.sessionService.getSessions();
  }


}
