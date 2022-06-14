import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { User } from "./user";
import { UserService } from "./user.service";

@Component({
  templateUrl: './user-info.component.html',
  styleUrls:['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user?: User;
  subbitted: boolean = false;


  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.retriveById(Number(this.activatedRoute.snapshot.paramMap.get('id')))
  }

  save(): void {
    this.userService.save(this.user);
    this.subbitted = true;
  }
}