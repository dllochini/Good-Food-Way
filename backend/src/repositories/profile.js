import { db } from "../config/db.js";
import { profiles } from "../schema/profiles.js";

export const createProfile = async (userId) => {
  const [profile] = await db
    .insert(profiles)
    .values({
      userId,
    })
    .returning();

  return profile;
};