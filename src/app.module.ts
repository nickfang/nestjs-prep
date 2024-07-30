import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RecipesService } from './recipes/recipes.service';
import { AppController } from './app.controller';
import { RecipesController } from './recipes/recipes.controller';
import { IngredientsController } from './ingredients/ingredients.controller';
import { NotFoundController } from './not-found/not-found.controller';
import { PrismaModule } from './prisma/prisma.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsService } from './ingredients/ingredients.service';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipeIngredientsController } from './recipe-ingredients/recipe-ingredients.controller';
import { RecipeIngredientsModule } from './recipe-ingredients/recipe-ingredients.module';
import { RecipeIngredientsService } from './recipe-ingredients/recipe-ingredients.service';

@Module({
  imports: [
    PrismaModule,
    RecipesModule,
    IngredientsModule,
    RecipeIngredientsModule,
  ],
  controllers: [
    AppController,
    RecipesController,
    IngredientsController,
    NotFoundController,
    RecipeIngredientsController,
  ],
  providers: [
    AppService,
    RecipesService,
    IngredientsService,
    RecipeIngredientsService,
  ],
})
export class AppModule {}
