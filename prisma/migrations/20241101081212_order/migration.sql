/*
  Warnings:

  - You are about to drop the column `payment_reference` on the `Order` table. All the data in the column will be lost.
  - Added the required column `hash` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "payment_reference",
ADD COLUMN     "hash" TEXT NOT NULL;
