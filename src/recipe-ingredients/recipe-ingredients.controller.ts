import {
  Body,
  Controller,
  DefaultValuePipe,
  Delete,
  Get,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecipeIngredientsService } from './recipe-ingredients.service';
import { RecipeIngredientsDto } from './dto/recipe-ingredients.dto';
import { CreateRecipeIngredientsDto } from './dto/create-recipe-ingredients.dto';
import { UpdateRecipeIngredientsDto } from './dto/update-recipe-ingredients.dto';

@Controller('recipe-ingredients')
export class RecipeIngredientsController {
  constructor(private recipeIngredientsService: RecipeIngredientsService) {}

  @Get()
  async getAll(
    @Query('archived', new DefaultValuePipe(false), ParseBoolPipe)
    includedArchive?: boolean,
  ): Promise<RecipeIngredientsDto[]> {
    return this.recipeIngredientsService.getAll(includedArchive);
  }

  @Get(':recipeId/ingredients/:ingredientId')
  async getOne(
    @Param('recipeId', ParseIntPipe) recipeId: number,
    @Param('ingredientId', ParseIntPipe) ingredientId: number,
  ) {
    console.log('recipeId', recipeId, 'ingredientId', ingredientId);
    return this.recipeIngredientsService.get(recipeId, ingredientId);
  }
  @Post()
  async create(
    @Body() payload: CreateRecipeIngredientsDto,
  ): Promise<RecipeIngredientsDto> {
    return this.recipeIngredientsService.create(payload);
  }
  @Put(':recipeId/ingredients/:ingredientId')
  async replace(
    @Param('recipe-id', ParseIntPipe) recipeId: number,
    @Param('ingredient-id', ParseIntPipe) ingredientId: number,
    @Body() payload: UpdateRecipeIngredientsDto,
  ): Promise<RecipeIngredientsDto> {
    return this.recipeIngredientsService.update(
      recipeId,
      ingredientId,
      payload,
    );
  }
  @Patch(':recipeId/ingredients/:ingredientId')
  async update(
    @Param('recipe-id', ParseIntPipe) recipeId: number,
    @Param('ingredient-id', ParseIntPipe) ingredientId: number,
    @Body() payload: UpdateRecipeIngredientsDto,
  ): Promise<RecipeIngredientsDto> {
    return this.recipeIngredientsService.update(
      recipeId,
      ingredientId,
      payload,
    );
  }
  @Delete(':recipeId/ingredients/:ingredientId')
  remove(
    @Param('recipeId', ParseIntPipe) recipeId: number,
    @Param('ingredientId', ParseIntPipe) ingredientId: number,
  ) {
    throw new Error('test');
    return this.recipeIngredientsService.delete(recipeId, ingredientId);
  }
}
