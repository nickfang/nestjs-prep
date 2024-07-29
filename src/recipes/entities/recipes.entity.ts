import { ApiProperty } from '@nestjs/swagger';
import { RecipeIngredients } from '../../recipeIngredients/entities/recipeIngredients.entity';

export class Recipes {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
  instructions: string;
  description: string | null;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  servings: number | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  deletedAt: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  archivedAt: Date | null;
  recipeIngredients?: RecipeIngredients[];
}
