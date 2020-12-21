import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GetUserComponent } from './get-user/get-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { DemoComponent } from './demo/demo.component';
import { RecipesComponent } from './testing/recipes/recipes.component';
import { ShoppingListComponent } from './testing/shopping-list/shopping-list.component';
import { UserComponent } from './testing/user/user.component';
import { Home2Component } from './testing/home2/home2.component';
import { RecipeListComponent } from './testing/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './testing/recipes/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './testing/recipes/recipe-detail/recipe-detail.component';
import { FormComponent } from './testing/form/form.component';
import { ReactiveFormComponent } from './testing/form/reactive-form/reactive-form.component';
import { RecipeEditComponent } from './testing/recipes/recipe-edit/recipe-edit.component';
import { PipeComponent } from './testing/pipe/pipe.component';

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
  path: 'recipe-list',
  component: RecipeListComponent
},{  
  path: 'recipe-detail',
  component: RecipeDetailComponent
},{  
  path: 'recipe-item',
  component: RecipeItemComponent
},{  
  path: 'recipe-edit',
  component: RecipeEditComponent
},{  
  path: 'shopping-list',
  component: ShoppingListComponent
},{  
  path: 'user/:id',
  component: UserComponent
},{  
  path: 'home2',
  component: Home2Component
},{  
  path: 'form',
  component: FormComponent
},{  
  path: 'reactive-form',
  component: ReactiveFormComponent
},{  
  path: 'pipe',
  component: PipeComponent
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