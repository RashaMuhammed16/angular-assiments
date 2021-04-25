import { Component, OnInit } from '@angular/core';
import {UserServicesService } from 'src/app/Services/user-services.service';
import { IUser } from 'src/app/Shared Classes and Types/IUser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userList:IUser[]=[];

  constructor(private userServices:UserServicesService) { }
  errorMsg
  ngOnInit(): void {
    this.userServices.returnAllUsers().subscribe(
      employeeData=>
      {
        this.userList=employeeData;
      },
      errorResponse=>
      {
       this.errorMsg=errorResponse;
      }
    )
  }




}










