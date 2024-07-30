import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RecipeIngredientsDto } from './dto/recipe-ingredients.dto';
import { CreateRecipeIngredientsDto } from './dto/create-recipe-ingredients.dto';
import { UpdateRecipeIngredientsDto } from './dto/update-recipe-ingredients.dto';

@Injectable()
export class RecipeIngredientsService {
  constructor(private prisma: PrismaService) {}

  async getAll(includeArchived: boolean): Promise<RecipeIngredientsDto[]> {
    return this.prisma.recipeIngredients.findMany({
      where: {
        deletedAt: null,
        archivedAt: includeArchived ? undefined : null,
      },
    });
  }

  async get(
    recipeId: number,
    ingredientId: number,
  ): Promise<RecipeIngredientsDto> {
    console.log('recipeId', recipeId, 'ingredientId', ingredientId);
    return this.prisma.recipeIngredients.findUnique({
      where: {
        recipeId_ingredientId: {
          recipeId: recipeId,
          ingredientId: ingredientId,
        },
      },
    });
  }

  async create(
    payload: CreateRecipeIngredientsDto,
  ): Promise<RecipeIngredientsDto> {
    return this.prisma.recipeIngredients.create({
      data: payload,
    });
  }

  async update(
    recipeId: number,
    ingredientId: number,
    payload: UpdateRecipeIngredientsDto,
  ): Promise<RecipeIngredientsDto> {
    return this.prisma.recipeIngredients.update({
      where: {
        recipeId_ingredientId: {
          recipeId: recipeId,
          ingredientId: ingredientId,
        },
      },
      data: payload,
    });
  }
  async replace(
    recipeId: number,
    ingredientId: number,
    payload: UpdateRecipeIngredientsDto,
  ): Promise<RecipeIngredientsDto> {
    return this.prisma.recipeIngredients.update({
      where: {
        recipeId_ingredientId: {
          recipeId: recipeId,
          ingredientId: ingredientId,
        },
      },
      data: payload,
    });
  }

  async archive(
    recipeId: number,
    ingredientId: number,
  ): Promise<RecipeIngredientsDto> {
    return this.prisma.recipeIngredients.update({
      where: {
        recipeId_ingredientId: {
          recipeId: recipeId,
          ingredientId: ingredientId,
        },
      },
      data: { archivedAt: new Date() },
    });
  }

  async delete(
    recipeId: number,
    ingredientId: number,
  ): Promise<RecipeIngredientsDto> {
    return this.prisma.recipeIngredients.update({
      where: {
        recipeId_ingredientId: {
          recipeId: recipeId,
          ingredientId: ingredientId,
        },
      },
      data: { deletedAt: new Date() },
    });
  }
}
