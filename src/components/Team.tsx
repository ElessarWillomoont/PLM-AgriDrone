"use client";

import { useState } from "react";
import { useTeamStore } from "@/store/teamStore";

export default function Team() {
  const { members, addMember, removeMember } = useTeamStore();
  const [newMember, setNewMember] = useState("");

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-bold mb-4">Team Members</h2>

      {/* List of Members */}
      <ul className="flex-1 space-y-2 overflow-auto">
        {members.map((member) => (
          <li key={member} className="flex justify-between items-center bg-gray-700 p-2 rounded">
            <span>{member}</span>
            <button
              onClick={() => removeMember(member)}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              ✕
            </button>
          </li>
        ))}
      </ul>

      {/* Add Member */}
      <div className="mt-4 flex">
        <input
          type="text"
          value={newMember}
          onChange={(e) => setNewMember(e.target.value)}
          className="flex-1 p-2 rounded bg-gray-800 text-white"
          placeholder="Add member..."
        />
        <button
          onClick={() => {
            if (newMember.trim()) {
              addMember(newMember.trim());
              setNewMember("");
            }
          }}
          className="ml-2 bg-blue-500 px-4 py-2 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}
