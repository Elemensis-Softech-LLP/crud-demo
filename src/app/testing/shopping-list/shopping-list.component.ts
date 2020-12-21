import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
// import { Component, OnInit } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { Ingredient } from '../shared/ingredient.model';
// import { ShoppingListService } from './shopping-list.service';

// @Component({
//   selector: 'app-shopping-list',
//   templateUrl: './shopping-list.component.html',
//   styleUrls: ['./shopping-list.component.css']
// })
// export class ShoppingListComponent implements OnInit {
//   ingredients: Ingredient[] = [];
//   private subscription: Subscription = new Subscription;
//   constructor(private slService: ShoppingListService) { }

//   ngOnInit(): void {
//     this.ingredients = this.slService.getIngredients();
//     this.subscription = this.slService.ingredientsChanged
//       .subscribe(
//         (ingredients: Ingredient[]) => {
//           this.ingredients = ingredients;
//         }
//       );
//   }
//   onEditItem(index: number) {
//     this.slService.startedEditing.next(index);
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }
// }
