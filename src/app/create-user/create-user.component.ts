import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from '../user-data';
import { AppserviceService } from '../userService/appservice.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserFetch } from '../user-fetch';
declare var $: any;

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit, InMemoryDbService {
  // dtOptions: DataTables.Settings = {};
  // title = 'datatables';
  dtOptions: DataTables.Settings = {};
  User: FormGroup;
  users: User[] = [];
  user: UserFetch | undefined;
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private appservice: AppserviceService,
    private http: HttpClient) {
      { 
        this.User = this.formBuilder.group({
          name: ['', [Validators.required]],
          model: ['', [Validators.required]],
          price: ['', [Validators.required]]
  
        });
        this.getUsers();
      }
     }
    //   this.dtOptions = {
    //   pagingType: 'full_numbers'
    // };
     getUsers(){
      this.appservice.getUsers().subscribe(data => {
        this.users = data;
      });
    }
  createDb(reqInfo?: import("angular-in-memory-web-api").RequestInfo | undefined): {} | import("rxjs").Observable<{}> | Promise<{}> {
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    // this.dtOptions = {
    //   pagingType: 'full_numbers'      
    // };
    $(document).ready(function() {
      $('#example').DataTable();
  } );
  }  
  addUser() {
    this.appservice.addUser(this.User.value).subscribe(data => {
      this.user = data;
      console.log(this.user);
    });
    this.getUsers();
  }
  get f() { return this.User.controls; }
}
