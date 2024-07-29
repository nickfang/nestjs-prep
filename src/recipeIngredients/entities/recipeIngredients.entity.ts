import { ApiProperty } from '@nestjs/swagger';
import { Recipes } from '../../recipes/entities/recipes.entity';
import { Ingredients } from '../../ingredients/entities/ingredients.entity';

export class RecipeIngredients {
  recipe?: Recipes;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  recipeId: number;
  ingredient?: Ingredients;
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
