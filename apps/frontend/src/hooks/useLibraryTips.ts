import { useEffect, useState } from "react";
import { libraryTipsRepository } from "../repositories/libraryTipsRepository";

type Tip = {
  id: number;
  title: string;
  description: string;
};

export function useLibraryTips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    libraryTipsRepository
      .getAll()
      .then(setTips)
      .catch(() => setError("Failed to load tips"));
  }, []);

  const addTip = async (text: string) => {
    try {
      await libraryTipsRepository.add({
        title: text,
        description: text,
      });

      const updated = await libraryTipsRepository.getAll();
      setTips(updated);
    } catch {
      setError("Failed to add tip");
    }
  };

  const removeTip = async (id: number) => {
    try {
      await libraryTipsRepository.remove(id);

      const updated = await libraryTipsRepository.getAll();
      setTips(updated);
    } catch {
      setError("Failed to delete tip");
    }
  };

  return { tips, error, addTip, removeTip };
}