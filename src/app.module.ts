import { Module } from '@nestjs/common';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { PrismaModule } from './prisma/prisma.module';
import { RecipesModule } from './recipes/recipes.module';
import { IngredientsModule } from './ingredients/ingredients.module';
import { RecipeIngredientsModule } from './recipe-ingredients/recipe-ingredients.module';
import { IngredientCategoriesModule } from './ingredients/ingredient-categories/ingredient-categories.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    PrismaModule,
    RecipesModule,
    IngredientsModule,
    RecipeIngredientsModule,
    IngredientCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
