import { ApiProperty } from '@nestjs/swagger';

export class IngredientsDto {
  @ApiProperty({
    type: `integer`,
    format: `int32`,
  })
  id: number;
  name: string;
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
