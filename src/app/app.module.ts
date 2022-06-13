import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AddUsersComponent } from './addusers/addUsers.component';
import { UsersListComponent } from './users/users-list.component';
import { UserInfoComponent } from './users/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    AddUsersComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '', component: UsersListComponent
    },{
      path: 'adduser', component: AddUsersComponent
    },
    {
      path:'users/:id', component: UserInfoComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
