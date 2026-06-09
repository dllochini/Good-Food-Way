import * as onboardingRepo from "../repositories/onboarding.js";

export const updateProfile = async (req, res) => {
  try {
    const {
      userId,
      age,
      gender,
      weight,
      height,
      activityLevel,
      goal,
      dislikes,
      planId,
    } = req.body;

    await onboardingRepo.upsertProfile({
      userId,
      age,
      gender,
      weight,
      height,
      activityLevel,
      goal,
      dislikes,
      planId,
    });

    await onboardingRepo.updateOnboardingFlag(userId, {
      profileCompleted: true,
      updatedAt: new Date(),
    });

    return res.json({ success: true });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


// ---------------- HEALTH GOALS STEP ----------------

export const updateHealthGoals = async (req, res) => {
  try {
    const { userId, healthGoals } = req.body;

    const profile = await onboardingRepo.getProfileByUserId(userId);

    await onboardingRepo.db.transaction(async (tx) => {
      await tx
        .delete("profile_health_goals")
        .where(eq(profile.id, profile.id));

      if (healthGoals?.length) {
        await tx.insert("profile_health_goals").values(
          healthGoals.map((id) => ({
            profileId: profile.id,
            healthGoalId: id,
          }))
        );
      }
    });

    await onboardingRepo.updateOnboardingFlag(userId, {
      healthGoalsCompleted: true,
      updatedAt: new Date(),
    });

    return res.json({ success: true });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


// ---------------- DIET STEP ----------------

export const updateDietPreferences = async (req, res) => {
  try {
    const { userId, dietaryPreferences } = req.body;

    const profile = await onboardingRepo.getProfileByUserId(userId);

    await onboardingRepo.db.transaction(async (tx) => {
      await tx.delete("profile_dietary_preferences")
        .where(eq(profile.id, profile.id));

      if (dietaryPreferences?.length) {
        await tx.insert("profile_dietary_preferences").values(
          dietaryPreferences.map((id) => ({
            profileId: profile.id,
            dietaryPreferenceId: id,
          }))
        );
      }
    });

    await onboardingRepo.updateOnboardingFlag(userId, {
      dietaryPreferencesCompleted: true,
      updatedAt: new Date(),
    });

    return res.json({ success: true });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


// ---------------- ALLERGIES STEP ----------------

export const updateAllergies = async (req, res) => {
  try {
    const { userId, allergens } = req.body;

    const profile = await onboardingRepo.getProfileByUserId(userId);

    await onboardingRepo.db.transaction(async (tx) => {
      await tx.delete("profile_allergies")
        .where(eq(profile.id, profile.id));

      if (allergens?.length) {
        await tx.insert("profile_allergies").values(
          allergens.map((id) => ({
            profileId: profile.id,
            allergenId: id,
          }))
        );
      }
    });

    await onboardingRepo.updateOnboardingFlag(userId, {
      allergiesCompleted: true,
      updatedAt: new Date(),
    });

    return res.json({ success: true });

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};


// ---------------- STATUS ----------------

export const getStatus = async (req, res) => {
  try {
    const { userId } = req.query;

    const status = await onboardingRepo.getOnboardingStatus(userId);

    return res.json(status);

  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};