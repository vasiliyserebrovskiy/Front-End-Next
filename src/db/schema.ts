import { integer, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const sportsTable = pgTable("sports", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  title: varchar({ length: 255 }).notNull().unique(),
  image: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});
//Table description with type and characteristics.
//npx drizzle-kit push - command for update DB
//supabase - online database resource

export const eventsTable = pgTable("events", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 255 }).notNull(),
});
