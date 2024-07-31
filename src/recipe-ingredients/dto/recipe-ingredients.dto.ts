import { ApiProperty } from '@nestjs/swagger';

export class RecipeIngredientsDto {
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity: number;
  unit: string;
  recipeId: number;
  ingredientId: number;
}
