/*
  Warnings:

  - Made the column `created_employee_no` on table `assets` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_employee_no` on table `cables` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_employee_no` on table `projects` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_employee_no` on table `routes` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_employee_no` on table `segments` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_employee_no` on table `site_points` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "assets" ALTER COLUMN "created_employee_no" SET NOT NULL;

-- AlterTable
ALTER TABLE "cables" ALTER COLUMN "created_employee_no" SET NOT NULL;

-- AlterTable
ALTER TABLE "projects" ALTER COLUMN "created_employee_no" SET NOT NULL;

-- AlterTable
ALTER TABLE "routes" ALTER COLUMN "created_employee_no" SET NOT NULL;

-- AlterTable
ALTER TABLE "segments" ALTER COLUMN "created_employee_no" SET NOT NULL;

-- AlterTable
ALTER TABLE "site_points" ALTER COLUMN "created_employee_no" SET NOT NULL;
