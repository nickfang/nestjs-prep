import { ApiProperty } from '@nestjs/swagger';

export class IngredientDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
}
