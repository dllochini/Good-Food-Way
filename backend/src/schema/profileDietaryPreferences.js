import { pgTable, uuid } from "drizzle-orm/pg-core";
import { profiles } from "./profiles.js";
import { dietary_preferences } from "./dietary_preferences.js";

export const profileDietaryPreferences = pgTable( "profile_dietary_preferences",
  {
    id: uuid("id").defaultRandom().primaryKey(),
    profileId: uuid("profile_id").references(() => profiles.id).notNull(),
    dietaryPreferenceId: uuid("dietary_preference_id").references(() => dietary_preferences.id).notNull(),
  }
);