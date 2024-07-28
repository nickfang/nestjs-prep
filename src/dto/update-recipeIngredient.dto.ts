import { ApiProperty } from '@nestjs/swagger';

export class UpdateRecipeIngredientDto {
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity?: number;
  unit?: string;
}
