/*
  Warnings:

  - You are about to drop the column `status` on the `OrderItem` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "status",
ADD COLUMN     "confirmed_payment" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "delivered" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "out_for_delivery" BOOLEAN NOT NULL DEFAULT false;
