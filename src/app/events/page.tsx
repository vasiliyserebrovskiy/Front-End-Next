"use client";

import { useEffect, useState, useCallback } from "react";
import { Event } from "@/types/index";
import EventCard from "@/components/EventCard/EventCard";
import { useSession } from "next-auth/react";

export default function Events() {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState("");
  const { data: session } = useSession();

  const fetchEvent = useCallback(async (): Promise<void> => {
    try {
      const res = await fetch("/api/events");
      if (!res.ok) {
        throw new Error(`Events fetch error: ${res.status} ${res.statusText}`);
      }

      const eventsObj = await res.json();
      setEvents(eventsObj);
    } catch (error) {
      setError(`Error receiving events list: ${error}`);
    }
  }, []);

  useEffect(() => {
    fetchEvent();
  }, [fetchEvent]);

  return (
    <section className="flex flex-col items-center gap-5 p-5">
      <h2 className="text-green-600">
        Event list for{" "}
        <span className="font-bold ">
          {session ? session?.user.name : "Guest"}
        </span>
      </h2>
      <div className="flex flex-col gap-5">
        {error ? (
          <p>{error}</p>
        ) : (
          events.map((e: Event) => <EventCard event={e} key={e.id} />)
        )}
      </div>
    </section>
  );
}
