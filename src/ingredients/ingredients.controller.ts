import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateIngredientDto } from 'src/dto/create-ingredient.dto';
import { UpdateIngredientDto } from 'src/dto/update-ingredient.dto';

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
  create(@Body() createIngredientDto: CreateIngredientDto) {
    console.log(createIngredientDto);
    return `This action creates a new ingredient with name: ${createIngredientDto.name}`;
  }
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateIngredientDTO: UpdateIngredientDto,
  ) {
    return `This action updates a ingredient with id: ${id} with name: ${updateIngredientDTO.name}`;
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a ingredient with id: ${id}`;
  }
}
