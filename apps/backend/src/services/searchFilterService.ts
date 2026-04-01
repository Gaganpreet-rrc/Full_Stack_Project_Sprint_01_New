import { prisma } from "./prisma"; 

export const searchFilterService = {
  async getAll() {
    return prisma.searchFilter.findMany({
      orderBy: { id: "desc" },
    });
  },

  async create(term: string) {
    return prisma.searchFilter.create({
      data: { term },
    });
  },

  async remove(id: number) {
    return prisma.searchFilter.delete({
      where: { id },
    });
  },
};