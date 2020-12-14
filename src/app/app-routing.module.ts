import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetUserComponent } from './get-user/get-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DemoComponent } from './demo/demo.component';
import { Home2Component } from './testing/home2/home2.component';

const routes: Routes = [{  
  path: 'home',
  component: HomeComponent
},{  
  path: 'get-user',
  component: GetUserComponent
},{  
  path: 'delete-user',
  component: DeleteUserComponent
},{  
  path: 'create-user',
  component: CreateUserComponent
},{  
  path: 'demo',
  component: DemoComponent
},{  
  path: 'home2',
  component: Home2Component
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
