import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  recipes: Recipe[] = [
    new Recipe("A test Recipe", "This is simply a test", "https://www.howtocook.recipes/homemade-ratatouille-recipe/")
  ]

  constructor() { }

}

