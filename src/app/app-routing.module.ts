import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetUserComponent } from './get-user/get-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DemoComponent } from './demo/demo.component';
import { RecipesComponent } from './testing/recipes/recipes.component';
import { ShoppingListComponent } from './testing/shopping-list/shopping-list.component';

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
  path: 'recipes',
  component: RecipesComponent
},{  
  path: 'shopping-list',
  component: ShoppingListComponent
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// {  
//   path: 'somthing',
//   redirectTo: '/recipes'
// }