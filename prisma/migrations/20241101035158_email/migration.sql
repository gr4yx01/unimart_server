/*
  Warnings:

  - You are about to drop the column `email` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionCode` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `subscriptionStatus` on the `Vendor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Vendor_email_key";

-- DropIndex
DROP INDEX "Vendor_subscriptionCode_key";

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "email",
DROP COLUMN "subscriptionCode",
DROP COLUMN "subscriptionStatus";
