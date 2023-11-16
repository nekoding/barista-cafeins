-- CreateTable

CREATE TABLE
    "site_points" (
        "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
        "cafeins_uuid" TEXT,
        "name" TEXT NOT NULL,
        "site_group_code" TEXT NOT NULL,
        "latitude" DOUBLE PRECISION NOT NULL,
        "longitude" DOUBLE PRECISION NOT NULL,
        "geometry" geometry,
        "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP(3) NOT NULL,
        "created_employee_no" TEXT,
        "modified_employee_no" TEXT,
        "status" "MIGRATION_STATUS",
        "last_read" TIMESTAMP(3),
        "is_migrated" BOOLEAN NOT NULL DEFAULT false,

CONSTRAINT "site_points_pkey" PRIMARY KEY ("uuid") );

-- CreateIndex

CREATE UNIQUE INDEX "site_points_site_group_code_key" ON "site_points"("site_group_code");