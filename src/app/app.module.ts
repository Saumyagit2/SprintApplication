import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material'
// Importing social login module and google login provider.
import { SocialLoginModule, AuthServiceConfig, GoogleLoginProvider } from 'angular4-social-login';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule,Routes} from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { GoogleAuthComponent } from './components/google-auth/google-auth.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskUpdateComponent } from './components/task-update/task-update.component';
import { SubTaskComponent } from './components/sub-task/sub-task.component';
import { SubtaskListComponent } from './components/subtask-list/subtask-list.component';
import { SubtaskUpdateComponent } from './components/subtask-update/subtask-update.component';
import { SearchComponent } from './search/search.component';

// Client id for the google oauth. This is used for validation of our application to google.
// https://developers.google.com/identity/sign-in/web/sign-in#before_you_begin
const google_oauth_client_id:string = '357066495411-n1bn9hc50ntk7715th6vntqabk08j65d.apps.googleusercontent.com';
let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider(google_oauth_client_id)
  }
]);

@NgModule({
  declarations: [
    AppComponent,
    GoogleAuthComponent,
    AddTaskComponent,
    TaskListComponent,
    TaskUpdateComponent,
    SubTaskComponent,
    SubtaskListComponent,
    SubtaskUpdateComponent,
    SearchComponent,
   
    
  ],
  // Injecting the social-login-module during the application startup!
  imports: [
    BrowserModule, SocialLoginModule.initialize(config), 
    BrowserAnimationsModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
