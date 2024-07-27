import { Controller, Get } from '@nestjs/common';

@Controller('ingredients')
export class IngredientsController {
  @Get()
  findAll(): string {
    return 'This action returns all ingredients';
  }
}
