import { db } from "@/db";
import { sportsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";
import z from "zod";

const SportInsertSchema = z.object({
  title: z
    .string()
    .nonempty("Title must not be null")
    .min(3, "Minimal length is 3")
    .max(255, "Max length is 255"),
  image: z.string().min(3, "Minimal length is 3").max(255, "Max length is 255"),
  description: z
    .string()
    .min(10, "Minimal length is 10")
    .max(255, "Max length is 255"),
});

export async function GET() {
  console.log("DATABASE_URL:", process.env.DATABASE_URL);
  const sports = await db.select().from(sportsTable);
  return NextResponse.json(sports);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { title, image, description } = SportInsertSchema.parse(body);
    const [sport] = await db
      .insert(sportsTable)
      .values({ title, image, description })
      .returning();

    return NextResponse.json(sport);
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
