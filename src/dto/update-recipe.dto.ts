import { ApiProperty } from '@nestjs/swagger';

export class UpdateRecipeDto {
  name?: string;
  instructions?: string;
  description?: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  servings?: number;
}
