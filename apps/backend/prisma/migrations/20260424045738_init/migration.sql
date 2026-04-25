/*
  Warnings:

  - Added the required column `userId` to the `SearchFilter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SearchFilter" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "SearchFilter" ADD CONSTRAINT "SearchFilter_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
