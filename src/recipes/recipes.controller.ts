import { Controller, Get } from '@nestjs/common';

@Controller('recipes')
export class RecipesController {
  @Get()
  findAll(): string {
    return 'This action returns all recipes';
  }
  @Get('favorites')
  findFavorite(): string {
    return 'This action returns the favorite recipe';
  }
}
