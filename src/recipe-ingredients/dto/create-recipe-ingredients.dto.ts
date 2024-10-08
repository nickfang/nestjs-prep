import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeIngredientsDto {
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity: string;
  unit: string;
  recipeId: string;
  ingredientId: string;
}
