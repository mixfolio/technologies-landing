import { create } from "zustand";

type UseMacbookStoryType = {
  color: string;
  setColor: (color: string) => void;
  scale: number;
  setScale: (scale: number) => void;
};

const useMacbookStore = create<UseMacbookStoryType>((set) => ({
  color: "2e2c2e",
  setColor: (color: string) => set({ color: color }),

  scale: 0.08,
  setScale: (scale: number) => set({ scale: scale }),

  reset: () => set({ color: "2e2c2e", scale: 0.08 }),
}));

export default useMacbookStore;
