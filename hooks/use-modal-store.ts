import { FeaturedProject } from "@/lib/types";
import { create } from "zustand";

interface modalStore {
  isOpen: boolean;
  data: Partial<FeaturedProject>;
  onOpen: (data: FeaturedProject) => void;
  onClose: () => void;
}

const useModalStore = create<modalStore>((set) => ({
  isOpen: false,
  data: {},
  onOpen: (data) => {
    set({ isOpen: true, data });
  },
  onClose: () => set({ isOpen: false, data: {} }),
}));

export default useModalStore;
