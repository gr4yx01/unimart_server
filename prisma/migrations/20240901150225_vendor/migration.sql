/*
  Warnings:

  - Added the required column `image` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "image" TEXT NOT NULL;
