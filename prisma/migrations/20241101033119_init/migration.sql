/*
  Warnings:

  - You are about to drop the column `account_number` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `bank_code` on the `Vendor` table. All the data in the column will be lost.
  - You are about to drop the column `subaccount_code` on the `Vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "wallet_address" TEXT;

-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "account_number",
DROP COLUMN "bank_code",
DROP COLUMN "subaccount_code",
ADD COLUMN     "wallet_address" TEXT;
