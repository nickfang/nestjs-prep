import {
  Body,
  Controller,
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
import { RecipesDto } from './dto/recipes.dto';
import { CreateRecipesDto } from './dto/create-recipes.dto';
import { UpdateRecipesDto } from './dto/update-recipes.dto';
import { RecipesService } from './recipes.service';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  async getAll(
    @Query('archived', ParseBoolPipe) includeArchived?: boolean,
  ): Promise<RecipesDto[]> {
    return this.recipesService.getAll(includeArchived);
  }

  @Get(':id')
  async getOne(@Param('id', ParseIntPipe) id: number): Promise<RecipesDto> {
    return this.recipesService.get(id);
  }

  @Post()
  async create(@Body() payload: CreateRecipesDto) {
    return this.recipesService.create(payload);
  }

  @Put(':id')
  async replace(
    @Param('id', ParseIntPipe) id: number,
    @Body() recipe: UpdateRecipesDto,
  ) {
    return `This action updates a recipe with id: ${id} with name: ${recipe.name}`;
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateRecipesDto,
  ) {
    return this.recipesService.update(id, payload);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number) {
    return this.recipesService.delete(id);
  }
}
