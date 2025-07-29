import { db } from "@/db";
import { eventsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const EventInsertSchema = z.object({
  name: z.string().min(3, "Minimal length is 3").max(255, "Max length is 255"),
  description: z
    .string()
    .min(10, "Minimal length is 10")
    .max(255, "Description schuld be less than 255")
    .refine(
      (val) => {
        if (val === "some description") {
          return false;
        }
        return true;
      },
      { message: "You should wright something more informative" }
    ),
});

export async function GET() {
  const events = await db.select().from(eventsTable);
  return NextResponse.json(events);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, description } = EventInsertSchema.parse(body);
    const [event] = await db
      .insert(eventsTable)
      .values({ name, description })
      .returning();

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid input", details: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
