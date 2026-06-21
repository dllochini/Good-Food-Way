import {
  pgTable,
  uuid,
  boolean,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

import { users } from "./users.js";

export const onboardingProgress =
  pgTable(
    "onboarding_progress",
    {
      id: uuid("id")
        .defaultRandom()
        .primaryKey(),

      userId: uuid("user_id")
        .references(
          () => users.id,
          {
            onDelete:
              "cascade",
          }
        )
        .notNull()
        .unique(),

      currentStep: integer(
        "current_step"
      ).default(1),

      profileCompleted:
        boolean(
          "profile_completed"
        ).default(false),

      goalsCompleted:
        boolean(
          "goals_completed"
        ).default(false),

      preferencesCompleted:
        boolean(
          "preferences_completed"
        ).default(false),

      planGenerated:
        boolean(
          "plan_generated"
        ).default(false),

      planSelected:
        boolean(
          "plan_selected"
        ).default(false),

      onboardingCompleted:
        boolean(
          "onboarding_completed"
        ).default(false),

      createdAt:
        timestamp(
          "created_at"
        )
          .defaultNow()
          .notNull(),

      updatedAt:
        timestamp(
          "updated_at"
        )
          .defaultNow()
          .notNull(),
    }
  );