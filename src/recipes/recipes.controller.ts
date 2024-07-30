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
  async getAll(
    @Query('archived') includeArchived?: string,
  ): Promise<RecipesDto[]> {
    throw new Error('Not implemented');
    return this.recipesService.getAll(includeArchived === 'true');
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<RecipesDto> {
    return this.recipesService.get(parseInt(id));
  }

  @Post()
  async create(@Body() payload: CreateRecipesDto) {
    return this.recipesService.create(payload);
  }

  @Put(':id')
  async replace(@Param('id') id: string, @Body() recipe: UpdateRecipesDto) {
    return `This action updates a recipe with id: ${id} with name: ${recipe.name}`;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() payload: UpdateRecipesDto) {
    return this.recipesService.update(parseInt(id), payload);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
      throw new Error('Invalid ID, no recipe deleted.');
    }
    return this.recipesService.delete(idNum);
  }
}
