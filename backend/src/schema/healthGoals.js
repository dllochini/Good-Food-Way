import { pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";

export const healthGoals = pgTable("health_goals", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  description: text("description"),
});
