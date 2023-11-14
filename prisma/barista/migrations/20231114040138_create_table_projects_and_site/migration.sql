-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('CREATED', 'UPDATED');

-- CreateTable
CREATE TABLE "projects" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" TEXT,
    "company_code" BIGINT NOT NULL,
    "vendor_no" BIGINT NOT NULL,
    "name" TEXT NOT NULL,
    "project_group_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" BIGINT,
    "modified_employee_no" BIGINT,
    "description" TEXT,
    "po_number" TEXT,
    "owner_name" TEXT,
    "owner_nik" TEXT,
    "status" "ProjectStatus",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "site" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    "site_group_code" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "geometry" geometry,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" BIGINT,
    "modified_employee_no" BIGINT,
    "description" TEXT,
    "po_number" TEXT,
    "owner_name" TEXT,
    "owner_nik" TEXT,
    "status" "ProjectStatus",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "site_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_project_group_code_key" ON "projects"("project_group_code");

-- CreateIndex
CREATE UNIQUE INDEX "site_site_group_code_key" ON "site"("site_group_code");
