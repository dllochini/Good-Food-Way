import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  integer,
  decimal,
  text,
} from "drizzle-orm/pg-core";

import { users } from "./users.js";
import { plans } from "./plans.js";

export const profiles = pgTable("profiles", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id")
    .references(() => users.id)
    .notNull(),

  age: integer("age"),

  gender: varchar("gender", {
    length: 20,
  }),

  height: decimal("height", {
    precision: 5,
    scale: 2,
  }),

  weight: decimal("weight", {
    precision: 5,
    scale: 2,
  }),

  activityLevel: varchar("activity_level", {
    length: 50,
  }),

  goal: varchar("goal", {
    length: 100,
  }),
  
  dislikes: text("dislikes"),
  
  planId: uuid("plan_id").references(() => plans.id),

  createdAt: timestamp("created_at").defaultNow(),

  updatedAt: timestamp("updated_at").defaultNow(),
});
