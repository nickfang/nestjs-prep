import { ApiProperty } from '@nestjs/swagger';

export class RecipeDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
  instructions: string;
  description: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  servings: number;
}
