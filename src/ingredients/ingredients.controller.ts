import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateIngredientDTO } from './dto/create.ingredient.dto';
import { UpdateIngredientDTO } from './dto/update.ingredient.dto';

@Controller('ingredients')
export class IngredientsController {
  @Get()
  findAll(): string {
    return 'This action returns all ingredients';
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a ingredient with id: ${id}`;
  }
  @Post()
  create(@Body() createIngredientDTO: CreateIngredientDTO) {
    console.log(createIngredientDTO);
    return `This action creates a new ingredient with name: ${createIngredientDTO.name}`;
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientDTO: UpdateIngredientDTO,
  ) {
    return `This action updates a ingredient with id: ${id} with name: ${updateIngredientDTO.name}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a ingredient with id: ${id}`;
  }
}
