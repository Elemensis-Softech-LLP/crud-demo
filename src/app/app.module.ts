import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserData } from './user-data.service';
import { GetUserComponent } from './get-user/get-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DataTablesModule } from 'angular-datatables';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    DemoComponent,
    
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule,
    RouterModule,
    AppRoutingModule, InMemoryWebApiModule.forRoot(UserData), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
