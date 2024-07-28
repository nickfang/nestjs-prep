import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeIngredientDto {
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity: number;
  unit: string;
}
