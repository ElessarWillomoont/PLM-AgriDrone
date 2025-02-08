"use client";

import { useState } from "react";
import { useBOMStore } from "@/store/bomStore";

export default function BOM() {
  const { items, addItem, removeItem } = useBOMStore();
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-bold mb-4">Bill of Materials</h2>

      {/* BOM Table */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Price ($)</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="bg-gray-800 text-white">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.quantity}</td>
                <td className="border p-2">{item.price}</td>
                <td className="border p-2">
                  <button
                    onClick={() => removeItem(item.id)}
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

      {/* Add New Material */}
      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          placeholder="Material Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="number"
          placeholder="Qty"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="w-16 p-2 rounded bg-gray-800 text-white"
          min="1"
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-20 p-2 rounded bg-gray-800 text-white"
          min="0"
        />
        <button
          onClick={() => {
            if (name.trim()) {
              addItem(name.trim(), quantity, price);
              setName("");
              setQuantity(1);
              setPrice(0);
            }
          }}
          className="bg-blue-500 px-4 py-2 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
