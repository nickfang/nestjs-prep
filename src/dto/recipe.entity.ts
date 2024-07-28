import { ApiProperty } from '@nestjs/swagger';
import { RecipeIngredient } from './recipeIngredient.entity';

export class Recipe {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
  instructions: string;
  description: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  servings: number;
  recipeIngredients?: RecipeIngredient[];
}
