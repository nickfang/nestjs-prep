import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RecipesService } from './recipes/recipes.service';
import { AppController } from './app.controller';
import { RecipesController } from './recipes/recipes.controller';
import { IngredientsController } from './ingredients/ingredients.controller';
import { NotFoundController } from './not-found/not-found.controller';
import { PrismaModule } from './prisma/prisma.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [PrismaModule, RecipesModule],
  controllers: [
    AppController,
    RecipesController,
    IngredientsController,
    NotFoundController,
  ],
  providers: [AppService, RecipesService],
})
export class AppModule {}
