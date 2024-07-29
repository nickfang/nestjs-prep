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
import { CreateIngredientsDto } from './dto/create-ingredients.dto';
import { UpdateIngredientsDto } from './dto/update-ingredients.dto';
import { IngredientsDto } from './dto/ingredients.dto';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private ingredientsService: IngredientsService) {}
  @Get()
  getAll(
    @Query('archived') includedArchived?: string,
  ): Promise<IngredientsDto[] | null> {
    return this.ingredientsService.getAll(includedArchived === 'true');
  }
  @Get(':id')
  get(@Param('id') id: string) {
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
