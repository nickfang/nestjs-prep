import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RecipesDto } from './dto/recipes.dto';
import { CreateRecipesDto } from './dto/create-recipes.dto';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  async findAll(includeArchived: boolean): Promise<RecipesDto[] | null> {
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

  async create(recipe: CreateRecipesDto): Promise<CreateRecipesDto> {
    return this.prisma.recipes.create({
      data: recipe,
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
