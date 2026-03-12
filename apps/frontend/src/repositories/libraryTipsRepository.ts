import { libraryTipsTestData, type Tip } from "../data/libraryTipsTestData";

let tips: Tip[] = [...libraryTipsTestData];

export const libraryTipsRepository = {
  getAll(): Tip[] {
    return tips;
  },

  add(tip: Tip): void {
    tips.push(tip);
  },

  remove(id: number): void {
    tips = tips.filter((t) => t.id !== id);
  },

  clear(): void {
    tips = [];
  },
};
