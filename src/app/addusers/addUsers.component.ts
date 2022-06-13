import { Component, OnInit } from "@angular/core";
import { User } from "../users/user";
import { UserService } from "../users/user.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './addUsers.component.html',
})


export class AddUsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.users = this.userService.retrieveAll();
  }
}