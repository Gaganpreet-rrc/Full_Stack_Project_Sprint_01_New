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

export const getUserByClerkId = async (clerkId: string) => {
  return await prisma.user.findUnique({
    where: { clerkId }
  });
};

export const deleteBookByUser = async (bookId: number, userId: number) => {
  const result = await prisma.book.deleteMany({
    where: {
      id: bookId,
      userId: userId
    }
  });

  return result.count > 0;
};

export const getBooksByUser = async (userId: number) => {
  return prisma.book.findMany({
    where: { userId }
  });
};
