export const decideLayout = (analytics) => {
  if (analytics.reward > 20) return "POWER_USER";
  if (analytics.reward > 10) return "ENGAGED";
  return "NORMAL";
};
