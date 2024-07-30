/*
  Warnings:

  - Added the required column `categoryId` to the `Ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredients" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT;

-- CreateTable
CREATE TABLE "IngredientCategories" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "archivedAt" TIMESTAMP(3),
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "IngredientCategories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IngredientCategories_name_key" ON "IngredientCategories"("name");

-- AddForeignKey
ALTER TABLE "Ingredients" ADD CONSTRAINT "Ingredients_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "IngredientCategories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
