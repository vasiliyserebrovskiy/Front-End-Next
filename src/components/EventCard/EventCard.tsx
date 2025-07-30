import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}
export default function EventCard({ event }: EventCardProps) {
  return (
    <div
      key={event.id}
      className="flex flex-col border-1 w-200 gap-2 p-5 border-cyan-700 m-2 items-center"
    >
      <p>{event.name}</p>
      <p>{event.description}</p>
    </div>
  );
}
