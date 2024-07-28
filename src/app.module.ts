import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { RecipesController } from './recipes/recipes.controller';
import { IngredientsController } from './ingredients/ingredients.controller';
import { NotFoundController } from './not-found/not-found.controller';
import { RecipesService } from './recipes/recipes.service';

@Module({
  imports: [PrismaModule],
  controllers: [
    AppController,
    RecipesController,
    IngredientsController,
    NotFoundController,
  ],
  providers: [AppService, RecipesService],
})
export class AppModule {}
