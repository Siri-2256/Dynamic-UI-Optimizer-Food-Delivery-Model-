export const getMealType = () => {
  const h = new Date().getHours();
  if (h < 11) return "Breakfast";
  if (h < 16) return "Lunch";
  if (h < 20) return "Snacks";
  return "Dinner";
};
