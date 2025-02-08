import { create } from "zustand";

// Define the component structure
interface BOMComponent {
  id: number;
  name: string;
  quantity: number;
  description: string;
  supplierPartNumber: string;
}

// Define the module structure
interface BOMModule {
  id: number;
  name: string;
  components: BOMComponent[];
}

// Define the product structure
interface BOMProduct {
  id: number;
  name: string;
  modules: BOMModule[];
}

// Define the store type
interface BOMState {
  products: BOMProduct[];
  addComponent: (productId: number, moduleId: number, component: Omit<BOMComponent, "id">) => void;
  removeComponent: (productId: number, moduleId: number, componentId: number) => void;
}

// Create the Zustand store
export const useBOMStore = create<BOMState>((set) => ({
  products: [
    {
      id: 1,
      name: "AgriDrone X1",
      modules: [
        {
          id: 1,
          name: "Frame and Structure",
          components: [
            { id: 1, name: "Carbon Fiber Frame", quantity: 1, description: "Lightweight carbon fiber frame", supplierPartNumber: "CF-001" },
            { id: 2, name: "Aluminum Alloy Arms", quantity: 6, description: "Aluminum alloy for rotor arms", supplierPartNumber: "AL-002" },
            { id: 3, name: "Landing Gear", quantity: 1, description: "Lightweight, foldable landing gear", supplierPartNumber: "LG-003" },
            { id: 4, name: "Screws and Fasteners", quantity: 50, description: "Stainless steel screws and bolts", supplierPartNumber: "SF-004" },
          ],
        },
        {
          id: 2,
          name: "Propulsion System",
          components: [
            { id: 5, name: "Brushless Motors", quantity: 6, description: "High-torque brushless motors", supplierPartNumber: "BM-005" },
            { id: 6, name: "Propellers", quantity: 6, description: "Carbon fiber propellers", supplierPartNumber: "PP-006" },
            { id: 7, name: "Motor Controllers", quantity: 6, description: "Electronic Speed Controllers (ESC)", supplierPartNumber: "ESC-007" },
          ],
        },
        {
          id: 3,
          name: "Spraying System",
          components: [
            { id: 8, name: "Spraying Tank", quantity: 1, description: "10-liter capacity, UV-resistant plastic", supplierPartNumber: "ST-008" },
            { id: 9, name: "Spray Nozzles", quantity: 6, description: "Adjustable nozzles for precise spraying", supplierPartNumber: "SN-009" },
            { id: 10, name: "Pump System", quantity: 1, description: "High-pressure pump for spraying", supplierPartNumber: "PS-010" },
            { id: 11, name: "Tubing and Connectors", quantity: 1, description: "Flexible tubing and connectors", supplierPartNumber: "TC-011" },
          ],
        },
        {
          id: 4,
          name: "Power System",
          components: [
            { id: 12, name: "Lithium-Polymer Battery", quantity: 1, description: "10,000 mAh, 30-minute flight time", supplierPartNumber: "LPB-012" },
            { id: 13, name: "Battery Charger", quantity: 1, description: "Fast charger with overcharge protection", supplierPartNumber: "BC-013" },
            { id: 14, name: "Power Distribution Board", quantity: 1, description: "Distributes power to motors and electronics", supplierPartNumber: "PDB-014" },
          ],
        },
      ],
    },
  ],
  addComponent: (productId, moduleId, component) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? {
              ...product,
              modules: product.modules.map((module) =>
                module.id === moduleId
                  ? { ...module, components: [...module.components, { id: Date.now(), ...component }] }
                  : module
              ),
            }
          : product
      ),
    })),
  removeComponent: (productId, moduleId, componentId) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === productId
          ? {
              ...product,
              modules: product.modules.map((module) =>
                module.id === moduleId
                  ? { ...module, components: module.components.filter((c) => c.id !== componentId) }
                  : module
              ),
            }
          : product
      ),
    })),
}));
