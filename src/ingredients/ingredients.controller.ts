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
  async getAll(
    @Query('archived') includedArchived?: string,
  ): Promise<IngredientsDto[] | null> {
    return this.ingredientsService.getAll(includedArchived === 'true');
  }
  @Get(':id')
  async get(@Param('id') id: string): Promise<IngredientsDto> {
    return this.ingredientsService.get(parseInt(id));
  }
  @Post()
  async create(@Body() payload: CreateIngredientsDto): Promise<IngredientsDto> {
    return this.ingredientsService.create(payload);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() payload: UpdateIngredientsDto,
  ): Promise<IngredientsDto> {
    return this.ingredientsService.update(parseInt(id), payload);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a ingredient with id: ${id}`;
  }
}
