/*
  Warnings:

  - You are about to drop the column `status` on the `OrderItem` table. All the data in the column will be lost.
  - You are about to drop the column `vendorId` on the `OrderItem` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "OrderItem" DROP CONSTRAINT "OrderItem_vendorId_fkey";

-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "vendorId" TEXT;

-- AlterTable
ALTER TABLE "OrderItem" DROP COLUMN "status",
DROP COLUMN "vendorId";

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
