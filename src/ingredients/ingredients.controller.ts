import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateIngredientsDto } from 'src/dto/create-ingredients.dto';
import { UpdateIngredientsDto } from 'src/dto/update-ingredients.dto';

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
  create(@Body() createIngredientDto: CreateIngredientsDto) {
    console.log(createIngredientDto);
    return `This action creates a new ingredient with name: ${createIngredientDto.name}`;
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientDTO: UpdateIngredientsDto,
  ) {
    return `This action updates a ingredient with id: ${id} with name: ${updateIngredientDTO.name}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a ingredient with id: ${id}`;
  }
}
