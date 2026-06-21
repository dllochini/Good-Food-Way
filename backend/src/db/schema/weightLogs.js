import {
  pgTable,
  uuid,
  decimal,
  date,
  timestamp,
} from "drizzle-orm/pg-core";

import { users } from "./users.js";

export const weightLogs = pgTable(
  "weight_logs",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),

    weight: decimal("weight", {
      precision: 5,
      scale: 2,
    }).notNull(),

    recordedDate: date(
      "recorded_date"
    ).notNull(),

    createdAt: timestamp(
      "created_at"
    )
      .defaultNow()
      .notNull(),
  }
);