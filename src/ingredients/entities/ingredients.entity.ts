import { ApiProperty } from '@nestjs/swagger';
import { RecipeIngredients } from '../../recipeIngredients/entities/recipeIngredients.entity';

export class Ingredients {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
  recipeIngredients?: RecipeIngredients[];
}
