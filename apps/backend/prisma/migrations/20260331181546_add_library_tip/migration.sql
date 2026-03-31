-- CreateTable
CREATE TABLE "SearchFilter" (
    "id" SERIAL NOT NULL,
    "term" TEXT NOT NULL,

    CONSTRAINT "SearchFilter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryTip" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "LibraryTip_pkey" PRIMARY KEY ("id")
);
