-- CreateEnum
CREATE TYPE "Subscription" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Vendor" ADD COLUMN     "subscription" "Subscription" NOT NULL DEFAULT 'INACTIVE';
