import { ApiProperty } from '@nestjs/swagger';

export class RecipesDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
  instructions: string;
  description: string | null;
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  servings: number | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  deletedAt: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  archivedAt: Date | null;
}
