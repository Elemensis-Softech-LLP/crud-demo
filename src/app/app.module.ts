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
import { TestingComponent } from './testing/testing.component';
import { HighliteDirective } from './testing/highlite/highlite.directive';
import { AccountComponent } from './testing/account/account.component';
import { NewAccountComponent } from './testing/account/new-account/new-account.component';
import { HeaderComponent } from './testing/header/header.component';
import { RecipesComponent } from './testing/recipes/recipes.component';
import { ShoppingListComponent } from './testing/shopping-list/shopping-list.component';
import { RecipeListComponent } from './testing/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './testing/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './testing/recipes/recipe-detail/recipe-detail.component';
import { ShoppingEditComponent } from './testing/shopping-list/shopping-edit/shopping-edit.component';
import { Home2Component } from './testing/home2/home2.component';
import { UserComponent } from './testing/user/user.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetUserComponent,
    DeleteUserComponent,
    CreateUserComponent,
    DemoComponent,
    TestingComponent,
    HighliteDirective,
    AccountComponent,
    NewAccountComponent,
    HeaderComponent,
    RecipesComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingEditComponent,
    Home2Component,
    UserComponent,
    
    
    
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
