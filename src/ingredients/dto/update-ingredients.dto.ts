import { ApiProperty } from '@nestjs/swagger';

export class UpdateIngredientsDto {
  name?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  archivedAt?: Date;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  deletedAt?: Date;
}
