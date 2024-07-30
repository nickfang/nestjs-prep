import { ApiProperty } from '@nestjs/swagger';

export class IngredientCategoriesDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
  description: string | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  archivedAt: Date | null;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  deletedAt: Date | null;
}
