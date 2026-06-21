import {
  pgTable,
  uuid,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

import { users } from "./users.js";
import { plans } from "./plans.js";

export const subscriptions = pgTable(
  "subscriptions",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    userId: uuid("user_id")
      .references(() => users.id, {
        onDelete: "cascade",
      })
      .notNull(),

    planId: uuid("plan_id")
      .references(() => plans.id)
      .notNull(),

    status: varchar("status", {
      length: 30,
    }).default("active"),

    startedAt: timestamp(
      "started_at"
    ).defaultNow(),

    expiresAt: timestamp(
      "expires_at"
    ),

    createdAt: timestamp(
      "created_at"
    ).defaultNow(),
  }
);