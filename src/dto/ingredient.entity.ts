import { ApiProperty } from '@nestjs/swagger';
import { RecipeIngredient } from './recipeIngredient.entity';

export class Ingredient {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
  recipeIngredients?: RecipeIngredient[];
}
