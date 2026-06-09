import { db } from "../config/db.js";
import { onboardingProgress } from "../schema/onboardingProgress.js";
import { profiles } from "../schema/profiles.js";
import { eq } from "drizzle-orm";

export const getOnboardingStatus = async (userId) => {
  const result = await db
    .select()
    .from(onboardingProgress)
    .where(eq(onboardingProgress.userId, userId));

  return result[0];
};

export const createOnboardingRow = async (userId) => {
  const result = await db
    .insert(onboardingProgress)
    .values({ userId })
    .returning();

  return result[0];
};

export const  updateOnboardingFlag = async (userId, data) => {
  return await db
    .update(onboardingProgress)
    .set(data)
    .where(eq(onboardingProgress.userId, userId));
};

export const upsertProfile = async (data) => {
  const result = await db
    .insert(profiles)
    .values(data)
    .onConflictDoUpdate({
      target: profiles.userId,
      set: {
        ...data,
        updatedAt: new Date(),
      },
    })
    .returning();

  return result[0];
};

export const getProfileByUserId = async (userId) => {
  const result = await db
    .select()
    .from(profiles)
    .where(eq(profiles.userId, userId));

  return result[0];
};