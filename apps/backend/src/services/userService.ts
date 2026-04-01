import { prisma } from "../prismaClient";

export const getUsers = async () => {
  return await prisma.user.findMany();
};

export const createUser = async (data: any) => {
  return await prisma.user.create({
    data,
  });
};

export const deleteUser = async (id: number) => {
  return prisma.user.delete({
    where: { id },
  });
};