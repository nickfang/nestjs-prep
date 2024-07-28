import { ApiProperty } from '@nestjs/swagger';

export class RecipeIngredientDto {
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity: number;
  unit: string;
}
