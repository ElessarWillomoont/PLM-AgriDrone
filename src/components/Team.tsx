"use client";

import { useState } from "react";
import { useTeamStore } from "@/store/teamStore";

export default function Team() {
  const { members, addMember, removeMember } = useTeamStore();
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [position, setPosition] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="flex flex-col h-full">
      <h2 className="text-lg font-bold mb-4">Team Members</h2>

      {/* List of Members */}
      <ul className="flex-1 space-y-2 overflow-auto">
        {members.map((member) => (
          <li key={member.id} className="bg-gray-700 p-2 rounded">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-bold">{member.name}</p>
                <p className="text-sm text-gray-300">{member.title}</p>
                <p className="text-xs text-gray-400">{member.position} | {member.location}</p>
              </div>
              <button
                onClick={() => removeMember(member.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                ✕
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Add Member Form */}
      <div className="mt-4 space-y-2">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
        />
        <button
          onClick={() => {
            if (name.trim() && title.trim() && position.trim() && location.trim()) {
              addMember({ name, title, position, location });
              setName("");
              setTitle("");
              setPosition("");
              setLocation("");
            }
          }}
          className="w-full bg-blue-500 px-4 py-2 text-white rounded"
        >
          Add Member
        </button>
      </div>
    </div>
  );
}
