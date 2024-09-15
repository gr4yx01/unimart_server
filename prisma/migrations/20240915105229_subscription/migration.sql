/*
  Warnings:

  - You are about to drop the column `subscription` on the `Vendor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Vendor" DROP COLUMN "subscription",
ADD COLUMN     "subscriptionCode" TEXT NOT NULL DEFAULT 'SUB_r5oqy8oo3onjx8z',
ADD COLUMN     "subscriptionStatus" "Subscription" NOT NULL DEFAULT 'INACTIVE';
