import {
  pgTable,
  uuid,
  unique,
} from "drizzle-orm/pg-core";

import { profiles } from "./profiles.js";
import { dietPreferences } from "./dietPreferences.js";

export const profileDietaryPreferences =
  pgTable(
    "profile_dietary_preferences",
    {
      id: uuid("id")
        .defaultRandom()
        .primaryKey(),

      profileId: uuid(
        "profile_id"
      )
        .references(
          () => profiles.id,
          {
            onDelete: "cascade",
          }
        )
        .notNull(),

      dietaryPreferenceId:
        uuid(
          "dietary_preference_id"
        )
          .references(
            () =>
              dietPreferences.id,
            {
              onDelete:
                "cascade",
            }
          )
          .notNull(),
    },
    (table) => ({
      uniqueProfileDiet:
        unique(
          "unique_profile_diet"
        ).on(
          table.profileId,
          table.dietaryPreferenceId
        ),
    })
  );