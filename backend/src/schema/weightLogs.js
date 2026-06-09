import { pgTable, uuid, varchar, timestamp } from "drizzle-orm/pg-core";
import { users } from "./users.js";

export const weightLogs = pgTable("weight_logs", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),

  weight: decimal("weight", {
    precision: 5,
    scale: 2,
  }),

  recordedDate: date("recorded_date"),
  createdAt: timestamp("created_at").defaultNow(),
});
