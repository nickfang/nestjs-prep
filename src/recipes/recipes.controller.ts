import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecipesDto } from './dto/recipes.dto';
import { CreateRecipesDto } from './dto/create-recipes.dto';
import { UpdateRecipesDto } from './dto/update-recipes.dto';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  async findAll(
    @Query('archived') includeArchived?: string,
  ): Promise<RecipesDto[]> {
    return this.recipesService.findAll(includeArchived === 'true');
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipesService.findOne(parseInt(id));
  }
  @Post()
  create(@Body() recipe: CreateRecipesDto) {
    return this.recipesService.create(recipe);
  }
  @Put(':id')
  replace(@Param('id') id: string, @Body() recipe: UpdateRecipesDto) {
    return `This action updates a recipe with id: ${id} with name: ${recipe.name}`;
  }
  @Patch(':id')
  update(@Param('id') id: string, @Body() recipe: UpdateRecipesDto) {
    return this.recipesService.update(parseInt(id), recipe);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
      throw new Error('Invalid ID, no recipe deleted.');
    }
    return this.recipesService.delete(idNum);
  }
}
