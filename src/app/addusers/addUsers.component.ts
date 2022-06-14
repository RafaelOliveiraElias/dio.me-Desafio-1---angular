import { Component, OnInit } from "@angular/core";
import { User } from "../users/user";
import { UserService } from "../users/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './addUsers.component.html',
  styleUrls:['./addUsers.component.css']
})


export class AddUsersComponent implements OnInit {
  users: User[] = [];
  subbitted: boolean = false;

  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.users = this.userService.retrieveAll();
  }
  user: User = {
    id: 0,
    name: '',
    imageUrl: '',
    personalEmail: '',
    professionalEmail: '',
    addedOn: '',
    role: '',
    department: '',
    submitsTo: '',
  };
  save():void {
    const timeNow: string = new Date().toLocaleString();

    this.user.addedOn = timeNow.replace('/', '.');
    this.user.id = this.users.length + 1
    this.userService.retrieveAll().push(this.user)
    this.subbitted = true;
  }
}