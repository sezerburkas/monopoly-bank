/*
  Warnings:

  - You are about to drop the column `toUsername` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `targetUsername` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Transactions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "action" TEXT NOT NULL,
    "fromUsername" TEXT NOT NULL,
    "targetUsername" TEXT NOT NULL,
    "amount" INTEGER NOT NULL
);
INSERT INTO "new_Transactions" ("action", "amount", "fromUsername", "id") SELECT "action", "amount", "fromUsername", "id" FROM "Transactions";
DROP TABLE "Transactions";
ALTER TABLE "new_Transactions" RENAME TO "Transactions";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
