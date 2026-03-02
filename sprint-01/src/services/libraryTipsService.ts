import { libraryTipsRepository } from "../repositories/libraryTipsRepository";
import type { Tip } from "../data/libraryTipsTestData";

export const libraryTipsService = {
  getTips(): Tip[] {
    return libraryTipsRepository.getAll();
  },

  addTip(text: string): { ok: true } | { ok: false; error: string } {
    const trimmed = text.trim();

    if (trimmed.length < 5) {
      return { ok: false, error: "Tip must be at least 5 characters." };
    }

    const current = libraryTipsRepository.getAll();
    const nextId = current.length ? Math.max(...current.map((t) => t.id)) + 1 : 1;

    libraryTipsRepository.add({ id: nextId, text: trimmed });
    return { ok: true };
  },

  removeTip(id: number): void {
    libraryTipsRepository.remove(id);
  },
};
