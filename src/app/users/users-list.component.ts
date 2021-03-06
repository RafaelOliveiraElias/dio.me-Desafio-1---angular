import { Component, OnInit } from "@angular/core";
import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.users = this.userService.retrieveAll();
  }

  deleteById(userId: number): void {
    this.userService.deleteById(userId);
    this.users = this.userService.retrieveAll();
  }
}