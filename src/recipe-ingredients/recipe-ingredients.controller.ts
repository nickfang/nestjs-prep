import { Controller, Get, Query } from '@nestjs/common';
import { RecipeIngredientsService } from './recipe-ingredients.service';
import { RecipeIngredientsDto } from './dto/recipe-ingredients.dto';

@Controller('recipe-ingredients')
export class RecipeIngredientsController {
  constructor(private recipeIngredientsService: RecipeIngredientsService) {}

  @Get()
  async getAll(
    @Query('archived') includedArchive?: string,
  ): Promise<RecipeIngredientsDto[]> {
    return this.recipeIngredientsService.getAll(includedArchive === 'true');
  }

  @Get(':id')
  async getOne(
    @Query('recipeId') recipeId: string,
    @Query('ingredientId') ingredientId: string,
  ) {
    return this.recipeIngredientsService.get(
      parseInt(recipeId),
      parseInt(ingredientId),
    );
  }
}
