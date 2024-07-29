import { ApiProperty } from '@nestjs/swagger';

export class UpdateRecipeIngredientsDto {
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity?: number;
  unit?: string;
}
