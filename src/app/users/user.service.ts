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
  submitsTo: 'himself',
},
{
  id: 2,
  name: 'Felipe Silva Aguiar',
  imageUrl: 'https://media-exp2.licdn.com/dms/image/C4D03AQGRScdqF_YQcQ/profile-displayphoto-shrink_800_800/0/1644264132495?e=1660780800&v=beta&t=E5BZvThsdTN4ZX4UKJcmv6b4G8NC-o_AvP-T3tX5Vv8',
  personalEmail: 'felipe.email.test@email.com',
  addedOn: '13.06.2022 15:25:47',
  role: 'Head',
  department: 'Community',
  submitsTo: '',
},
{
  id: 3,
  name: 'Renan Oliveira',
  imageUrl: 'https://media-exp2.licdn.com/dms/image/C4D03AQGl11ANPunACA/profile-displayphoto-shrink_200_200/0/1653457072866?e=1660780800&v=beta&t=fOdu1xhO61-26nSK-eytcQovqw5_mErQiIZVHom1BJA',
  personalEmail: 'renan.email.test@email.com',
  professionalEmail: 'email.Renan.test1@email.com',
  addedOn: '13.06.2022 15:25:47',
  role: 'Head',
  department: 'Education',
  submitsTo: '',
},
{
  id: 4,
  name: 'Venilton FalvoJr',
  imageUrl: 'https://media-exp2.licdn.com/dms/image/C4D03AQGtCpw16FvYKw/profile-displayphoto-shrink_200_200/0/1517525016599?e=1660780800&v=beta&t=KVVxYG9fG7hqM-pdQKxzxOeg49WKxvIX7TqBRULqdbo',
  personalEmail: 'vanilton.email.test@email.com',
  professionalEmail: 'email.vanilton.test1@email.com',
  addedOn: '13.06.2022 12:25:47',
  role: 'Tech Lead',
  department: 'Education',
  submitsTo: 'Renan Oliveira',
}]