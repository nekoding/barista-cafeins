-- CreateTable
CREATE TABLE "assets" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" TEXT,
    "unique_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT,
    "modified_employee_no" TEXT,
    "code" TEXT,
    "asset_group_code" TEXT,
    "project_group_code" TEXT,
    "site_group_code" TEXT,
    "asset_category" TEXT,
    "asset_ownership" TEXT,
    "area_ownership" TEXT,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "assets_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "assets_unique_id_key" ON "assets"("unique_id");
