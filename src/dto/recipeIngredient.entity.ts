import { ApiProperty } from '@nestjs/swagger';
import { Recipe } from './recipe.entity';
import { Ingredient } from './ingredient.entity';

export class RecipeIngredient {
  recipe?: Recipe;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  recipeId: number;
  ingredient?: Ingredient;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  ingredientId: number;
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity: number;
  unit: string;
}
