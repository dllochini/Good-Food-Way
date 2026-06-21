import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";

export const dietPreferences = pgTable("diet_preferences", {
  id: uuid("id").defaultRandom().primaryKey(),
  dietType: varchar("diet_type", { length: 50 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
