import { pgTable, uuid } from "drizzle-orm/pg-core";
import { profiles } from "./profiles.js";
import { allergens } from "./allergens.js";

export const profileAllergies = pgTable("profile_allergies",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    profileId: uuid("profile_id").references(() => profiles.id).notNull(),
    allergenId: uuid("allergen_id").references(() => allergens.id).notNull(),
  }
);