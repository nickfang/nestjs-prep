import { ApiProperty } from '@nestjs/swagger';

export class UpdateRecipesDto {
  name?: string;
  instructions?: string;
  description?: string;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
    default: 1,
  })
  servings?: number;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  deletedAt?: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  archivedAt?: Date;
}
