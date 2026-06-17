import {
  pgTable,
  uuid,
  integer,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

import { profiles } from "./profiles.js";

export const nutritionPlans = pgTable(
  "nutrition_plans",
  {
    id: uuid("id")
      .defaultRandom()
      .primaryKey(),

    profileId: uuid("profile_id")
      .references(() => profiles.id, {
        onDelete: "cascade",
      })
      .notNull(),

    calories: integer("calories"),

    protein: integer("protein"),

    waterTarget: integer(
      "water_target_ml"
    ),

    expectedTimeline: varchar(
      "expected_timeline",
      {
        length: 100,
      }
    ),

    generatedAt: timestamp(
      "generated_at"
    ).defaultNow(),

    createdAt: timestamp(
      "created_at"
    ).defaultNow(),
  }
);