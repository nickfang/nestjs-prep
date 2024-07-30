-- DropForeignKey
ALTER TABLE "Ingredients" DROP CONSTRAINT "Ingredients_categoryId_fkey";

-- AlterTable
ALTER TABLE "Ingredients" ALTER COLUMN "categoryId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "IngredientCategories"("id") ON DELETE SET NULL ON UPDATE CASCADE;
