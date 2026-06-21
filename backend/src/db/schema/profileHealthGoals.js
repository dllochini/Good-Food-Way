import {
  pgTable,
  uuid,
  unique,
} from "drizzle-orm/pg-core";

import { profiles } from "./profiles.js";
import { healthGoals } from "./healthGoals.js";

export const profileHealthGoals =
  pgTable(
    "profile_health_goals",
    {
      id: uuid("id")
        .defaultRandom()
        .primaryKey(),

      profileId: uuid("profile_id")
        .references(() => profiles.id, {
          onDelete: "cascade",
        })
        .notNull(),

      healthGoalId: uuid(
        "health_goal_id"
      )
        .references(
          () => healthGoals.id,
          {
            onDelete: "cascade",
          }
        )
        .notNull(),
    },
    (table) => ({
      uniqueProfileGoal: unique(
        "unique_profile_goal"
      ).on(
        table.profileId,
        table.healthGoalId
      ),
    })
  );