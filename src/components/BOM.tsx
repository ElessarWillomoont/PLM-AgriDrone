"use client";

import { useState } from "react";
import { useBOMStore } from "@/store/bomStore";

export default function BOM() {
  const { products, addComponent, removeComponent } = useBOMStore();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");
  const [supplierPartNumber, setSupplierPartNumber] = useState("");

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-bold mb-4">Bill of Materials</h2>

      {/* BOM Product List */}
      <div className="flex-1 overflow-auto">
        {products.map((product) => (
          <div key={product.id} className="mb-6">
            <h3 className="text-xl font-bold text-gray-300">{product.name}</h3>

            {product.modules.map((module) => (
              <div key={module.id} className="mt-4">
                <h4 className="text-lg font-semibold text-gray-400">{module.name}</h4>
                <table className="w-full border-collapse border border-gray-700 mt-2">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="border p-2">Name</th>
                      <th className="border p-2">Quantity</th>
                      <th className="border p-2">Description</th>
                      <th className="border p-2">Supplier/Part Number</th>
                      <th className="border p-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {module.components.map((component) => (
                      <tr key={component.id} className="bg-gray-800 text-white">
                        <td className="border p-2">{component.name}</td>
                        <td className="border p-2">{component.quantity}</td>
                        <td className="border p-2">{component.description}</td>
                        <td className="border p-2">{component.supplierPartNumber}</td>
                        <td className="border p-2">
                          <button
                            onClick={() => removeComponent(product.id, module.id, component.id)}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
