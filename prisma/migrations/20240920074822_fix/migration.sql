/*
  Warnings:

  - A unique constraint covering the columns `[subscriptionCode]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `amount` to the `OrderItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "amount" INTEGER NOT NULL,
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Vendor" ALTER COLUMN "subscriptionCode" DROP DEFAULT;

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_subscriptionCode_key" ON "Vendor"("subscriptionCode");
