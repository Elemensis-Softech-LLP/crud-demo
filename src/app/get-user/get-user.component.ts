import { Component, OnInit } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from '../user-data';
import { AppserviceService } from '../userService/appservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit, InMemoryDbService{
  users: User[] = [];

  constructor(private appservice: AppserviceService,
    private http: HttpClient,
    private router: Router) { }
    createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo | undefined): {} | import("rxjs").Observable<{}> | Promise<{}> {
      throw new Error("Method not implemented.");
    }
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.appservice.getUsers().subscribe(data => {
      this.users = data;
    });
  }
}
