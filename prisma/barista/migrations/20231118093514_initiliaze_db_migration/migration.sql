-- CreateExtension
CREATE EXTENSION IF NOT EXISTS "postgis";

-- CreateEnum
CREATE TYPE "MIGRATION_STATUS" AS ENUM ('CREATED', 'UPDATED');

-- CreateTable
CREATE TABLE "projects" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" UUID,
    "company_code" TEXT NOT NULL,
    "vendor_no" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "project_group_code" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT NOT NULL,
    "modified_employee_no" TEXT,
    "description" TEXT,
    "po_number" TEXT,
    "owner_name" TEXT NOT NULL,
    "owner_nik" TEXT NOT NULL,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "site_points" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" UUID,
    "name" TEXT NOT NULL,
    "company_code" TEXT NOT NULL,
    "site_group_code" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "geometry" geometry,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT NOT NULL,
    "modified_employee_no" TEXT,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "site_points_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "logs" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "level" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "meta" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "logs_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "assets" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" UUID,
    "unique_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT NOT NULL,
    "modified_employee_no" TEXT,
    "code" TEXT NOT NULL,
    "asset_group_code" TEXT NOT NULL,
    "project_group_code" TEXT NOT NULL,
    "site_group_code" TEXT NOT NULL,
    "asset_category" TEXT NOT NULL,
    "asset_ownership" TEXT NOT NULL,
    "area_ownership" TEXT NOT NULL,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "routes" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" UUID,
    "unique_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "geometry" geometry,
    "length" DECIMAL(10,3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT NOT NULL,
    "modified_employee_no" TEXT,
    "site_group_code_from" TEXT NOT NULL,
    "site_group_code_to" TEXT NOT NULL,
    "route_method" TEXT NOT NULL,
    "route_ownership" TEXT NOT NULL,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "cables" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" UUID,
    "unique_id" TEXT NOT NULL,
    "project_group_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "length" DECIMAL(10,3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT NOT NULL,
    "modified_employee_no" TEXT,
    "cable_category" TEXT NOT NULL,
    "cable_group" TEXT NOT NULL,
    "site_group_code_from" TEXT NOT NULL,
    "site_group_code_to" TEXT NOT NULL,
    "asset_ownership" TEXT NOT NULL,
    "area_ownership" TEXT NOT NULL,
    "placement_type" TEXT NOT NULL,
    "function" TEXT NOT NULL,
    "route_unique_id_pembentuk" TEXT,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "cables_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "segments" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" UUID,
    "unique_id" TEXT NOT NULL,
    "project_group_code" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT NOT NULL,
    "modified_employee_no" TEXT,
    "site_group_code_from" TEXT NOT NULL,
    "site_group_code_to" TEXT NOT NULL,
    "route_unique_id_pembentuk" TEXT,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "segments_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "projects_project_group_code_key" ON "projects"("project_group_code");

-- CreateIndex
CREATE UNIQUE INDEX "site_points_site_group_code_key" ON "site_points"("site_group_code");

-- CreateIndex
CREATE UNIQUE INDEX "assets_unique_id_key" ON "assets"("unique_id");

-- CreateIndex
CREATE UNIQUE INDEX "routes_unique_id_key" ON "routes"("unique_id");

-- CreateIndex
CREATE UNIQUE INDEX "cables_unique_id_key" ON "cables"("unique_id");

-- CreateIndex
CREATE UNIQUE INDEX "segments_unique_id_key" ON "segments"("unique_id");
