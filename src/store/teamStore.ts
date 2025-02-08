import { create } from "zustand";

// Define the member type
interface TeamMember {
  id: number;
  name: string;
  title: string;
  position: string;
  location: string;
}

// Define the store type
interface TeamState {
  members: TeamMember[];
  addMember: (member: Omit<TeamMember, "id">) => void;
  removeMember: (id: number) => void;
}

// Create the store
export const useTeamStore = create<TeamState>((set) => ({
  members: [
    // Existing Members
    { id: 1, name: "YD", title: "Team Leader", position: "Leader", location: "La Défense" },
    { id: 2, name: "JUL", title: "Team Leader", position: "Leader", location: "La Défense" },
    { id: 3, name: "Bob", title: "Software Designer", position: "Control system", location: "New York" },
    { id: 4, name: "Lucie", title: "Supply Chain Manager", position: "Supply Chain", location: "Shenzhen" },
    { id: 5, name: "Alice", title: "3D Designer", position: "3D modeling", location: "Rome" },
    { id: 6, name: "Gabriel", title: "Electronic Expert", position: "PCB designer", location: "Paris" },

    // **Newly Invented Members for the Agricultural Drone Team**
    { id: 7, name: "Marco", title: "Agricultural Specialist", position: "Field Operations", location: "Milan" },
    { id: 8, name: "Elena", title: "AI Engineer", position: "Machine Learning", location: "Berlin" },
    { id: 9, name: "Hiroshi", title: "Mechanical Engineer", position: "Drone Mechanics", location: "Tokyo" },
    { id: 10, name: "Sophia", title: "Business Analyst", position: "Market Strategy", location: "London" },
    { id: 11, name: "Carlos", title: "Aerodynamics Engineer", position: "Flight Dynamics", location: "Madrid" },
    { id: 12, name: "Zhang Wei", title: "Battery Engineer", position: "Energy Storage", location: "Shanghai" },
    { id: 13, name: "Amira", title: "GIS & Remote Sensing Expert", position: "Satellite Data Analysis", location: "Dubai" },
  ],
  addMember: (member) =>
    set((state) => ({
      members: [...state.members, { id: Date.now(), ...member }],
    })),
  removeMember: (id) =>
    set((state) => ({
      members: state.members.filter((m) => m.id !== id),
    })),
}));
