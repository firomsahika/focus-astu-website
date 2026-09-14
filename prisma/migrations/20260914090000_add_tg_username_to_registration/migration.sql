-- AlterTable
ALTER TABLE "Registration"
ADD COLUMN "tgUsername" TEXT;

UPDATE "Registration"
SET "tgUsername" = 'unknown'
WHERE "tgUsername" IS NULL;

ALTER TABLE "Registration"
ALTER COLUMN "tgUsername" SET NOT NULL;
