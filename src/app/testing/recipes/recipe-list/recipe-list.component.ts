import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
// @Output()  recipewasSelected = new EventEmitter<Recipe>();
// recipes : Recipe [] = [
//   new Recipe('A Test Recipe', 'this is a simply test', '../assets/image/images.jpeg'),
//   new Recipe('Another Test Recipe', 'this is a simply test', '../assets/image/images.jpeg')
// ];
  constructor() { }

  ngOnInit(): void {
  }
  // onRecipeSelected(recipe: Recipe){
  //   this.recipewasSelected.emit(recipe);
  //   }
}
