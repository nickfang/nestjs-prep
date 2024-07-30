import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { IngredientsDto } from './dto/ingredients.dto';
import { CreateIngredientsDto } from './dto/create-ingredients.dto';
import { UpdateIngredientsDto } from './dto/update-ingredients.dto';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  async getAll(includeArchived: boolean): Promise<IngredientsDto[]> {
    return this.prisma.ingredients.findMany({
      where: {
        deletedAt: null,
        archivedAt: includeArchived ? undefined : null,
      },
    });
  }

  async get(id: number): Promise<IngredientsDto> {
    return this.prisma.ingredients.findUnique({
      where: { id },
    });
  }

  async create(payload: CreateIngredientsDto): Promise<IngredientsDto> {
    return this.prisma.ingredients.create({
      data: payload,
    });
  }

  async update(
    id: number,
    payload: UpdateIngredientsDto,
  ): Promise<IngredientsDto> {
    return this.prisma.ingredients.update({
      where: { id },
      data: payload,
    });
  }

  async replace(
    id: number,
    payload: UpdateIngredientsDto,
  ): Promise<IngredientsDto> {
    return this.prisma.ingredients.update({
      where: { id },
      data: payload,
    });
  }

  async archive(id: number): Promise<IngredientsDto> {
    return this.prisma.ingredients.update({
      where: { id },
      data: { archivedAt: new Date() },
    });
  }

  async delete(id: number) {
    return this.prisma.ingredients.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
