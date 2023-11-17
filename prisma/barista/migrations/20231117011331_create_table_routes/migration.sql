-- CreateTable
CREATE TABLE "routes" (
    "uuid" UUID NOT NULL DEFAULT gen_random_uuid(),
    "cafeins_uuid" TEXT,
    "unique_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "geometry" geometry,
    "length" DECIMAL(10,3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "created_employee_no" TEXT,
    "modified_employee_no" TEXT,
    "site_group_code_from" TEXT,
    "site_group_code_to" TEXT,
    "route_method" TEXT,
    "route_ownership" TEXT,
    "status" "MIGRATION_STATUS",
    "last_read" TIMESTAMP(3),
    "is_migrated" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "routes_pkey" PRIMARY KEY ("uuid")
);

-- CreateIndex
CREATE UNIQUE INDEX "routes_unique_id_key" ON "routes"("unique_id");
