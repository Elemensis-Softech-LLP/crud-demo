import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from '../user-data';
import { AppserviceService } from '../userService/appservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,InMemoryDbService {
  users: User[] = [];

  constructor(private appservice: AppserviceService,
              private http: HttpClient) { }
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
