import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { RecipesDto } from 'src/dto/recipes.dto';
import { CreateRecipesDto } from 'src/dto/create-recipes.dto';
import { UpdateRecipesDto } from 'src/dto/update-recipes.dto';
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
    return `This action returns a recipe with id: ${id}`;
  }
  @Post()
  create(@Body() createRecipeDTO: CreateRecipesDto) {
    console.log(createRecipeDTO);
    return `This action creates a new recipe with name: ${createRecipeDTO.name}`;
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() updateRecipeDTO: UpdateRecipesDto) {
    return `This action updates a recipe with id: ${id} with name: ${updateRecipeDTO.name}`;
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
