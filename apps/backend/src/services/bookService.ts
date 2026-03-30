import { prisma } from "../prismaClient";

export const getBooks = async () => {
  return await prisma.book.findMany();
};

export const createBook = async (data: { title: string; author: string; userId: number }) => {
  return await prisma.book.create({
    data,
  });
};

export const deleteBook = async (id: number) => {
  return await prisma.book.delete({
    where: { id },
  });
};