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
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  archivedAt: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  deletedAt: Date | null;
}
