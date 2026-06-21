import db from "../../config/db.js";
import { profiles } from "../../db/schema/profiles.js";
import { profileHealthGoals } from "../../db/schema/profileHealthGoals.js";
import { healthGoals } from "../../db/schema/healthGoals.js";
import { dietPreferences } from "../../db/schema/dietPreferences.js";
import { profileDietaryPreferences } from "../../db/schema/profileDietaryPreferences.js";
import { onboardingProgress } from "../../db/schema/onboardingProgress.js";
import { eq } from "drizzle-orm";

// used after registration
export async function createOnboardingProgress(userId) {
  const [progress] = await db
    .insert(onboardingProgress)
    .values({
      userId,
      currentStep: 1,
      profileCompleted: false,
      goalsCompleted: false,
      preferencesCompleted: false,
      planGenerated: false,
      planSelected: false,
      onboardingCompleted: false,
    })
    .onConflictDoNothing()
    .returning();

  return progress;
}

// used when final onboarding submit happens
export async function saveOnboarding(userId, data) {
  return await db.transaction(async (tx) => {
    const [profile] = await tx
      .insert(profiles)
      .values({
        userId,
        age: Number(data.age),
        gender: data.gender,
        height: data.height,
        weight: data.weight,
        activityLevel: data.activity,
        dislikes: data.dislikes,
      })

      .onConflictDoUpdate({
        target: profiles.userId,

        set: {
          age: Number(data.age),
          gender: data.gender,
          height: data.height,
          weight: data.weight,
          activityLevel: data.activity,
          dislikes: data.dislikes,
        },
      })
      .returning();

    // goals
    for (const goal of data.goals) {
      const existing = await tx
        .select()
        .from(healthGoals)
        .where(eq(healthGoals.name, goal));

      let goalId;

      if (existing.length) {
        goalId = existing[0].id;
      } else {
        const [created] = await tx
          .insert(healthGoals)
          .values({
            name: goal,
          })
          .returning();

        goalId = created.id;
      }

      await tx
        .insert(profileHealthGoals)
        .values({
          profileId: profile.id,
          healthGoalId: goalId,
        })
        .onConflictDoNothing();
    }

    // diet
    if (data.foodType) {
      let diet;

      const existing = await tx
        .select()
        .from(dietPreferences)
        .where(eq(dietPreferences.dietType, data.foodType));

      if (existing.length) {
        diet = existing[0];
      } else {
        [diet] = await tx
          .insert(dietPreferences)
          .values({
            dietType: data.foodType,
          })
          .returning();
      }

      await tx
        .insert(profileDietaryPreferences)
        .values({
          profileId: profile.id,
          dietaryPreferenceId: diet.id,
        })
        .onConflictDoNothing();
    }

    // complete onboarding

    await tx
      .update(onboardingProgress)
      .set({
        currentStep: 8,
        profileCompleted: true,
        goalsCompleted: true,
        preferencesCompleted: true,
        planGenerated: true,
        planSelected: true,
        onboardingCompleted: true,
      })
      .where(eq(onboardingProgress.userId, userId));

    return profile;
  });
}

export async function getHealthGoals() {
  const goals = await db.select().from(healthGoals);
  console.log("Retrieved health goals:", goals);
  return goals;
}

export async function getDietPreferences() {
  return await db.select().from(dietPreferences);
}

export async function getPlans() {
  return await db.select().from(plans);
}
