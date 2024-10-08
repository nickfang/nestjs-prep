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
import { CreateIngredientsDto } from './dto/create-ingredients.dto';
import { UpdateIngredientsDto } from './dto/update-ingredients.dto';
import { IngredientsDto } from './dto/ingredients.dto';
import { IngredientsService } from './ingredients.service';

@Controller('ingredients')
export class IngredientsController {
  constructor(private ingredientsService: IngredientsService) {}
  @Get()
  async getAll(
    @Query('archived', new DefaultValuePipe(false), ParseBoolPipe)
    includedArchived?: string,
  ): Promise<IngredientsDto[] | null> {
    return this.ingredientsService.getAll(includedArchived === 'true');
  }
  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number): Promise<IngredientsDto> {
    return this.ingredientsService.get(id);
  }
  @Post()
  async create(@Body() payload: CreateIngredientsDto): Promise<IngredientsDto> {
    return this.ingredientsService.create(payload);
  }
  @Put(':id')
  async replace(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateIngredientsDto,
  ): Promise<IngredientsDto> {
    return this.ingredientsService.update(id, payload);
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateIngredientsDto,
  ): Promise<IngredientsDto> {
    return this.ingredientsService.update(id, payload);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return `This action removes a ingredient with id: ${id}`;
  }
}
