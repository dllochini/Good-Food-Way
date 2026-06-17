import { db } from "../config/db.js";
import { onboardingProgress } from "../schema/onboardingProgress.js";

export const createOnboardingProgress = async (
  userId
) => {
  const [progress] = await db
    .insert(onboardingProgress)
    .values({
      userId,
    })
    .returning();

  return progress;
};