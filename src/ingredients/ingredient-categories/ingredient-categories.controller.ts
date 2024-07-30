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
import { IngredientCategoriesService } from './ingredient-categories.service';
import { IngredientCategoriesDto } from './dto/ingredient-categories.dto';
import { CreateIngredientCategoriesDto } from './dto/create-ingredient-categories.dto';
import { UpdateIngredientCategoriesDto } from './dto/update-ingredient-categories.dto';

@Controller('ingredients/categories')
export class IngredientCategoriesController {
  constructor(
    private ingredientCategoriesService: IngredientCategoriesService,
  ) {}

  @Get()
  async getAll(
    @Query('archived') includeArchived?: string,
  ): Promise<IngredientCategoriesDto[]> {
    return this.ingredientCategoriesService.getAll(includeArchived == 'true');
  }
  @Get(':id')
  async getOne(@Param('id') id: string): Promise<IngredientCategoriesDto> {
    return this.ingredientCategoriesService.get(parseInt(id));
  }

  @Post()
  async create(@Body() payload: CreateIngredientCategoriesDto) {
    return this.ingredientCategoriesService.create(payload);
  }

  @Put(':id')
  async replace(
    @Param('id') id: string,
    @Body() recipe: UpdateIngredientCategoriesDto,
  ) {
    return `This action updates a recipe with id: ${id} with name: ${recipe.name}`;
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateIngredientCategoriesDto,
  ) {
    return this.ingredientCategoriesService.update(parseInt(id), payload);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const idNum = parseInt(id);
    if (isNaN(idNum)) {
      throw new Error('Invalid ID, no recipe deleted.');
    }
    return this.ingredientCategoriesService.delete(idNum);
  }
}
