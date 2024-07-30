import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IngredientCategoriesDto } from './dto/ingredient-categories.dto';
import { CreateIngredientCategoriesDto } from './dto/create-ingredient-categories.dto';
import { UpdateIngredientCategoriesDto } from './dto/update-ingredient-categories.dto';

@Injectable()
export class IngredientCategoriesService {
  constructor(private prisma: PrismaService) {}

  async getAll(includeArchived: boolean): Promise<IngredientCategoriesDto[]> {
    return this.prisma.ingredientCategories.findMany({
      where: {
        deletedAt: null,
        archivedAt: includeArchived ? undefined : null,
      },
    });
  }
  async get(id: number): Promise<IngredientCategoriesDto> {
    return this.prisma.ingredientCategories.findUnique({
      where: { id },
    });
  }

  async create(
    payload: CreateIngredientCategoriesDto,
  ): Promise<IngredientCategoriesDto> {
    return this.prisma.ingredientCategories.create({
      data: payload,
    });
  }

  async update(
    id: number,
    payload: UpdateIngredientCategoriesDto,
  ): Promise<IngredientCategoriesDto> {
    return this.prisma.ingredientCategories.update({
      where: { id },
      data: payload,
    });
  }

  async replace(
    id: number,
    payload: UpdateIngredientCategoriesDto,
  ): Promise<IngredientCategoriesDto> {
    return this.prisma.ingredientCategories.update({
      where: { id },
      data: payload,
    });
  }

  async archive(id: number): Promise<IngredientCategoriesDto> {
    return this.prisma.ingredientCategories.update({
      where: { id },
      data: { archivedAt: new Date() },
    });
  }

  async delete(id: number): Promise<IngredientCategoriesDto> {
    return this.prisma.ingredientCategories.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
