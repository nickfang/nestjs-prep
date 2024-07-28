import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateRecipeDto } from 'src/dto/create-recipe.dto';
import { UpdateRecipeDto } from 'src/dto/update-recipe.dto';
import { RecipesService } from './recipes.service';
import { Recipe } from './interfaces/recipe.interface';

@Controller('recipes')
export class RecipesController {
  constructor(private recipesService: RecipesService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipesService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a recipe with id: ${id}`;
  }
  @Post()
  create(@Body() createRecipeDTO: CreateRecipeDto) {
    console.log(createRecipeDTO);
    return `This action creates a new recipe with name: ${createRecipeDTO.name}`;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecipeDTO: UpdateRecipeDto) {
    return `This action updates a recipe with id: ${id} with name: ${updateRecipeDTO.name}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a recipe with id: ${id}`;
  }
}
