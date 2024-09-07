/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `Vendor` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `account_number` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bank_code` to the `Vendor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `Vendor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "vendorId" TEXT;

-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "account_number" TEXT NOT NULL,
ADD COLUMN     "bank_code" TEXT NOT NULL,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "subaccount_code" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_email_key" ON "Vendor"("email");

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE SET NULL ON UPDATE CASCADE;
