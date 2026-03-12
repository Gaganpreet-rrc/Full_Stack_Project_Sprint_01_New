import { useEffect, useState } from "react";
import { libraryTipsService } from "../services/libraryTipsService";
import type { Tip } from "../data/libraryTipsTestData";

export function useLibraryTips() {
  const [tips, setTips] = useState<Tip[]>([]);
  const [error, setError] = useState("");

  function refresh() {
    setTips(libraryTipsService.getTips());
  }

  useEffect(() => {
    refresh();
  }, []);

  function addTip(text: string) {
    const result = libraryTipsService.addTip(text);
    if (!result.ok) {
      setError(result.error);
      return;
    }
    setError("");
    refresh();
  }

  function removeTip(id: number) {
    libraryTipsService.removeTip(id);
    refresh();
  }

  return { tips, error, addTip, removeTip };
}
