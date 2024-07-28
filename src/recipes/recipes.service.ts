import { Injectable } from '@nestjs/common';
import { Recipe } from './interfaces/recipe.interface';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRecipeDto } from 'src/dto/create-recipe.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Recipe[] | null> {
    return this.prisma.recipe.findMany({
      include: {
        recipeIngredients: true,
      },
    });
  }

  async create(recipe: CreateRecipeDto): Promise<CreateRecipeDto> {
    return this.prisma.recipe.create({
      data: recipe,
    });
  }
}
