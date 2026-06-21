import {
  pgTable,
  uuid,
  varchar,
  text,
  decimal,
  integer,
  boolean,
  timestamp,
} from "drizzle-orm/pg-core";

export const plans = pgTable("plans", {
  id: uuid("id")
    .defaultRandom()
    .primaryKey(),

  name: varchar("name", {
    length: 100,
  }).notNull(),

  description: text("description"),

  price: decimal("price", {
    precision: 10,
    scale: 2,
  }).notNull(),

  durationDays: integer("duration_days")
    .notNull(),

  recommended: boolean("recommended")
    .default(false),

  active: boolean("active")
    .default(true),

  createdAt: timestamp("created_at")
    .defaultNow()
    .notNull(),

  updatedAt: timestamp("updated_at")
    .defaultNow()
    .notNull(),
});