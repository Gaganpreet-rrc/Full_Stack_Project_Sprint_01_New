import { prisma } from "../prismaClient";

export const login = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return {
    id: user.id,
    email: user.email,
  };
};

export const getUsersByClerkId = async (clerkId: string) => {
  return await prisma.user.findMany({
    where: {
      clerkId: clerkId,
    },
    select: {
      id: true,
      email: true,
      name: true,
    },
  });
};