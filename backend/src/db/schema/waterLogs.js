import {
  pgTable,
  uuid,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

import { users } from "./users.js";

export const waterLogs = pgTable(
  "water_logs",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),

    amountMl: integer(
      "amount_ml"
    ).notNull(),

    createdAt: timestamp(
      "created_at"
    )
      .defaultNow()
      .notNull(),
  }
);