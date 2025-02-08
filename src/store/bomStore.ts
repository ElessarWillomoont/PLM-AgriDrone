import { create } from "zustand";

// Define the store type
interface BOMItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

interface BOMState {
  items: BOMItem[];
  addItem: (name: string, quantity: number, price: number) => void;
  removeItem: (id: number) => void;
}

// Create the Zustand store
export const useBOMStore = create<BOMState>((set) => ({
  items: [
    { id: 1, name: "Material A", quantity: 10, price: 50 },
    { id: 2, name: "Material B", quantity: 5, price: 100 },
  ], // Default materials
  addItem: (name, quantity, price) =>
    set((state) => ({
      items: [
        ...state.items,
        { id: Date.now(), name, quantity, price },
      ],
    })),
  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
}));
