import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', '../assets/image/images.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', '../assets/image/images.jpeg')
  ];
  recipewasSelected: any;
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipewasSelected.emit(recipe);
    }
}
// import { Component, OnInit,EventEmitter, Output } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Subscription } from 'rxjs';
// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';

// @Component({
//   selector: 'app-recipe-list',
//   templateUrl: './recipe-list.component.html',
//   styleUrls: ['./recipe-list.component.css']
// })
// export class RecipeListComponent implements OnInit {
//   recipes: Recipe[] = [];
//   subscription: Subscription = new Subscription;
//   constructor(private recipeService: RecipeService,
//     private router: Router,
//     private route: ActivatedRoute) { }

//   ngOnInit(): void {
//     this.subscription = this.recipeService.recipesChanged
//     .subscribe(
//       (recipes: Recipe[]) => {
//         this.recipes = recipes;
//       }
//     );
//   this.recipes = this.recipeService.getRecipes();
//   }
//   onNewRecipe() {
//     this.router.navigate(['new'], {relativeTo: this.route});
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }
// }
// '../assets/image/images.jpeg'