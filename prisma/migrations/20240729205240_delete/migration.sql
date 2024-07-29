-- AlterTable
ALTER TABLE "Ingredients" ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "RecipeIngredients" ADD COLUMN     "archivedAt" TIMESTAMP(3),
ADD COLUMN     "deletedAt" TIMESTAMP(3);
