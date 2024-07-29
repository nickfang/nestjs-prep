import { ApiProperty } from '@nestjs/swagger';

export class CreateRecipeIngredientsDto {
  @ApiProperty({
    type: `number`,
    format: `float`,
  })
  quantity: number;
  unit: string;
}
