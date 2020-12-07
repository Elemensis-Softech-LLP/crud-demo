import { Component, OnInit } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from '../user-data';
import { AppserviceService } from '../userService/appservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserFetch } from '../user-fetch';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  users: User[] = [];
  user!: UserFetch;
  displayData!: boolean;
  constructor(private router: Router,
    private appservice: AppserviceService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getUsers();
     this.deleteUser();
     this.dtOptions = {
      pagingType: 'full_numbers'      
    };
    
  }
  idtodelete=0;
  deleteUser() {

    this.appservice.deleteUser(this.idtodelete).subscribe(data => {
      this.getUsers();
    });
  }

  getUsers(){
    this.appservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
