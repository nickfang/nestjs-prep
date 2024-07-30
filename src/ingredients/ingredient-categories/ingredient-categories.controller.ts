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
    @Query('archived', new DefaultValuePipe(false), ParseBoolPipe)
    includeArchived?: boolean,
  ): Promise<IngredientCategoriesDto[]> {
    return this.ingredientCategoriesService.getAll(includeArchived);
  }
  @Get(':id')
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<IngredientCategoriesDto> {
    return this.ingredientCategoriesService.get(id);
  }

  @Post()
  async create(@Body() payload: CreateIngredientCategoriesDto) {
    return this.ingredientCategoriesService.create(payload);
  }

  @Put(':id')
  async replace(
    @Param('id', ParseIntPipe) id: number,
    @Body() recipe: UpdateIngredientCategoriesDto,
  ) {
    return `This action replaces an ingredient category with id: ${id} with name: ${recipe.name}`;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateIngredientCategoriesDto,
  ) {
    return this.ingredientCategoriesService.update(id, payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientCategoriesService.delete(id);
  }
}
