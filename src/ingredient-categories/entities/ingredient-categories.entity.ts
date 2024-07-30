
import {ApiProperty} from '@nestjs/swagger'
import {Ingredients} from '../../ingredients/entities/ingredients.entity'


export class IngredientCategories {
  @ApiProperty({
  type: `integer`,
  format: `int32`,
})
id: number ;
name: string ;
description: string  | null;
ingredients?: Ingredients[] ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
archivedAt: Date  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
deletedAt: Date  | null;
}
