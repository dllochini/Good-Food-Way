const KEY = "tgf_onboarding_data";

export function getOnboardingData() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveOnboardingData(partialData) {
  try {
    const current = getOnboardingData();
    const next = { ...current, ...partialData };
    localStorage.setItem(KEY, JSON.stringify(next));
    return next;
  } catch {
    return partialData;
  }
}

export function clearOnboardingData() {
  try {
    localStorage.removeItem(KEY);
  } catch {
    // ignore
  }
}