/*
  Warnings:

  - Added the required column `rating` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `thumbnail` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `Product` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "rating" INTEGER NOT NULL,
ADD COLUMN     "thumbnail" TEXT NOT NULL,
ALTER COLUMN "description" SET NOT NULL;
