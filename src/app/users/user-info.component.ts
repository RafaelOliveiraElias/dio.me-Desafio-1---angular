import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  templateUrl: './user-info.component.html'
})
export class UserInfoComponent implements OnInit {
  user?: User;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.retriveById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
  }
}