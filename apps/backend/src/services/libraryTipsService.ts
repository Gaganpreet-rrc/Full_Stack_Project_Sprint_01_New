let tips: { id: number; title: string; description: string }[] = [];

export const getAllTips = async () => {
  return tips;
};

export const createTip = async (data: { title: string; description: string }) => {
  const newTip = {
    id: tips.length + 1,
    ...data,
  };

  tips.push(newTip);
  return newTip;
};

export const deleteTip = async (id: number) => {
  tips = tips.filter((tip) => tip.id !== id);
  return { message: "Deleted successfully" };
};