import { create } from "zustand";

// Define the store type
interface TeamState {
  members: string[];
  addMember: (name: string) => void;
  removeMember: (name: string) => void;
}

// Create the store
export const useTeamStore = create<TeamState>((set) => ({
  members: ["Alice", "Bob", "Charlie"], // Default team members
  addMember: (name) =>
    set((state) => ({ members: [...state.members, name] })),
  removeMember: (name) =>
    set((state) => ({ members: state.members.filter((m) => m !== name) })),
}));
