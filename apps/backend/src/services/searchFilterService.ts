import { prisma } from "./prisma"; 

export const searchFilterService = {
  async getAll(userId: number) {
    return prisma.searchFilter.findMany({
      where:{ userId },
      orderBy: { id: "desc" },
    });
  },

  async create(term: string, userId: number) {
    return prisma.searchFilter.create({
      data: { term, userId },
    });
  },

  async remove(id: number, userId: number) {
    return prisma.searchFilter.delete({
      where: { id, userId },
    });
  },
};