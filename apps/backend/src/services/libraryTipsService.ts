let tips: { id: number; title: string; description: string; userId: string }[] = [];

export const getAllTips = async (userId: string) => {
  return tips.filter((tip) => tip.userId === userId);
};

export const createTip = async (
  data: { title: string; description: string },
  userId: string
) => {
  const newTip = {
    id: tips.length + 1,
    ...data,
    userId,
  };

  tips.push(newTip);
  return newTip;
};

export const deleteTip = async (id: number, userId: string) => {
  tips = tips.filter((tip) => !(tip.id === id && tip.userId === userId));
  return { message: "Deleted successfully" };
};