import { pgTable, uuid, boolean, timestamp,} from "drizzle-orm/pg-core";

import { users } from "./users.js";

export const onboardingProgress = pgTable("onboarding_progress", {
  id: uuid("id").defaultRandom().primaryKey(),
  userId: uuid("user_id").references(() => users.id).notNull().unique(),
  profileCompleted: boolean("profile_completed").default(false),
  healthGoalsCompleted: boolean("health_goals_completed").default(false),
  dietaryPreferencesCompleted: boolean("dietary_preferences_completed").default(false),
  allergiesCompleted: boolean("allergies_completed").default(false),
  planCompleted: boolean("plan_completed").default(false),
  onboardingCompleted: boolean("onboarding_completed").default(false),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});