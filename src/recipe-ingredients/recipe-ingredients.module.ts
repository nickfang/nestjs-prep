import { Module } from '@nestjs/common';
import { RecipeIngredientsService } from './recipe-ingredients.service';
import { RecipeIngredientsController } from './recipe-ingredients.controller';

@Module({
  imports: [],
  providers: [RecipeIngredientsService],
  controllers: [RecipeIngredientsController],
})
export class RecipeIngredientsModule {}
