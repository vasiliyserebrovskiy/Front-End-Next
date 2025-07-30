"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateEventForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description }),
      });

      if (!res.ok) {
        throw new Error("Failed to create event");
      }

      setName("");
      setDescription("");
      router.push("/events");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 max-w-md mx-auto mt-8 p-4 border border-cyan-700 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold text-center">Create Event</h2>

      <input
        type="text"
        placeholder="Event Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border rounded p-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />

      <textarea
        placeholder="Event Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border rounded p-2 h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-yellow-500 text-white font-bold py-2 rounded hover:bg-yellow-600 transition cursor-pointer disabled:opacity-50"
      >
        {loading ? "Creating..." : "Create Event"}
      </button>
    </form>
  );
}
