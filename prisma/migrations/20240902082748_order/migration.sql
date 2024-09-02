/*
  Warnings:

  - You are about to drop the column `delivery_date` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `delivery_time` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "delivery_date",
DROP COLUMN "delivery_time",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "payment_status" DROP NOT NULL;
