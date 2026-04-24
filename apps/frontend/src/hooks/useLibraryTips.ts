import { useEffect, useState } from "react";
import { libraryTipsRepository } from "../repositories/libraryTipsRepository";
import { useUser } from "@clerk/clerk-react";

type Tip = {
  id: number;
  title: string;
  description: string;
};

export function useLibraryTips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [error, setError] = useState("");

  const { user } = useUser();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = user?.id;

        if (!userId) {
          console.log("User not logged in");
          return;
        }

        const data = await libraryTipsRepository.getAll(userId);

        if (Array.isArray(data)) {
          setTips(data);
        } else {
          setError("Invalid data from server");
        }
      } catch (err) {
        console.error(err);
        setError("Failed to load tips");
      }
    };

    fetchData();
  }, [user]);

  const addTip = async (text: string) => {
    try {
      const userId = user?.id;

      if (!userId) {
        console.log("User not logged in");
        return;
      }

      await libraryTipsRepository.add(
        {
          title: text,
          description: text,
        },
        userId
      );

      const updated = await libraryTipsRepository.getAll(userId);
      setTips(updated);
    } catch (err) {
      console.error(err);
      setError("Failed to add tip");
    }
  };

  const removeTip = async (id: number) => {
    try {
      const userId = user?.id;

      if (!userId) {
        console.log("User not logged in");
        return;
      }

      await libraryTipsRepository.remove(id, userId);

      const updated = await libraryTipsRepository.getAll(userId);
      setTips(updated);
    } catch (err) {
      console.error(err);
      setError("Failed to delete tip");
    }
  };

  return { tips, error, addTip, removeTip };
}