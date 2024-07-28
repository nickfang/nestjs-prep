export interface Recipe {
  id: number;
  name: string;
  description: string;
  instructions: string;
  recipeIngredients: RecipeIngredient[];
}

export interface RecipeIngredient {
  // id: number;
  recipeId: number;
  // ingredientId: number;
  quantity: number;
  unit: string;
}
