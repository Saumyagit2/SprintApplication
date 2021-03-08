import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { componentFactoryName } from '@angular/compiler';
import {AddTaskComponent} from './components/add-task/add-task.component'
import {GoogleAuthComponent} from './components/google-auth/google-auth.component'
import { TaskListComponent } from './components/task-list/task-list.component'
import { TaskUpdateComponent } from './components/task-update/task-update.component';
import { SubTaskComponent } from './components/sub-task/sub-task.component';
import {SubtaskListComponent} from './components/subtask-list/subtask-list.component';
const routes: Routes = [
  {path :'',component:GoogleAuthComponent },
  { path: 'add-task', component: AddTaskComponent},
  {path :'task-list',component: TaskListComponent},
  {path :'task-update',component:TaskUpdateComponent},
  {path :'sub-task',component: SubTaskComponent },
  {path :'subtask-list',component:SubtaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }