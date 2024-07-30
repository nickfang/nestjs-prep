import { ApiProperty } from '@nestjs/swagger';

export class CreateIngredientsDto {
  name: string;
  description?: string;
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
