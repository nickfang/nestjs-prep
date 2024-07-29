import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecipesDto } from './dto/recipes.dto';
import { CreateRecipesDto } from './dto/create-recipes.dto';
import { UpdateRecipesDto } from './dto/update-recipes.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async getAll(includeArchived: boolean): Promise<RecipesDto[] | null> {
    return this.prisma.recipes.findMany({
      where: {
        deletedAt: null,
        archivedAt: includeArchived ? undefined : null,
      },
      include: {
        recipeIngredients: true,
      },
    });
  }

  async get(id: number): Promise<RecipesDto> {
    return this.prisma.recipes.findUnique({
      where: { id },
      include: {
        recipeIngredients: true,
      },
    });
  }

  async create(payload: CreateRecipesDto): Promise<CreateRecipesDto> {
    return this.prisma.recipes.create({
      data: payload,
    });
  }

  async update(id: number, payload: UpdateRecipesDto): Promise<RecipesDto> {
    return this.prisma.recipes.update({
      where: { id },
      data: payload,
    });
  }

  async replace(id: number, payload: UpdateRecipesDto): Promise<RecipesDto> {
    return this.prisma.recipes.update({
      where: { id },
      data: payload,
    });
  }

  async archive(id: number): Promise<RecipesDto> {
    return this.prisma.recipes.update({
      where: { id },
      data: { archivedAt: new Date() },
    });
  }

  async delete(id: number): Promise<RecipesDto> {
    return this.prisma.recipes.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
