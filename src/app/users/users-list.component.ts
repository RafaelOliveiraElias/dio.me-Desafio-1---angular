import { Component, OnInit } from "@angular/core";
import { User } from "./user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = [];

  ngOnInit(): void {
    this.users = [{
      id: 1,
      name: 'Rafael Oliveira Elias',
      imageUrl: '/assets/images/rafael.jpg',
      personalEmail: 'email.test1@email.com',
      professionalEmail: 'email.pro.test1@email.com',
      addedOn: '13.06.2022 12:25:47',
      role: 'student',
      department: 'education',
      submitsTo: ' ',
    },
    {
      id: 1,
      name: 'Rafael Oliveira Elias',
      imageUrl: '/assets/images/rafael.jpg',
      personalEmail: 'email.test1@email.com',
      professionalEmail: 'email.pro.test1@email.com',
      addedOn: '13.06.2022 12:25:47',
      role: 'student',
      department: 'education',
      submitsTo: ' ',
    }]
  }
}