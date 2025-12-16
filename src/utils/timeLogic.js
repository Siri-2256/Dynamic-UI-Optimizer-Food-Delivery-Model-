export function getMealType() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 11) return "Breakfast";
  if (hour >= 11 && hour < 16) return "Lunch";
  if (hour >= 16 && hour < 22) return "Dinner";
  return "Late Night";
}

