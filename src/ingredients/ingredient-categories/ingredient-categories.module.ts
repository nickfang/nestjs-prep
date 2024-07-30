import { Module } from '@nestjs/common';
import { IngredientCategoriesService } from './ingredient-categories.service';
import { IngredientCategoriesController } from './ingredient-categories.controller';

@Module({
  imports: [],
  providers: [IngredientCategoriesService],
  controllers: [IngredientCategoriesController],
})
export class IngredientCategoriesModule {}
