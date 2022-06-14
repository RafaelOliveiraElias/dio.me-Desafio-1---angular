import { User } from "./user";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  retrieveAll(): User[] {
    return users;
  }

  retriveById(id: number ) {
    return users.find((each) => each.id === id);
  }

  save(user: any): void {
    if (user.id) {
      const index = users.findIndex((each: User) => each.id === user.id);
      users[index] = user;
    }
  }
}

let users = [{
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
  id: 2,
  name: 'Rafael Oliveira Elias',
  imageUrl: '/assets/images/rafael.jpg',
  personalEmail: 'email.test1@email.com',
  addedOn: '13.06.2022 12:25:47',
  role: 'student',
  department: 'education',
  submitsTo: ' ',
}]