import { ApiProperty } from '@nestjs/swagger';

export class IngredientsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
}
