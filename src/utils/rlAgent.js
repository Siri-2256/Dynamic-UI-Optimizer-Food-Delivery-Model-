export const rlAgent = {
  getRecommendedItems(userClicks = 0, timeOfDay = "lunch") {
    if (timeOfDay === "breakfast") {
      return ["Idli", "Dosa", "Coffee"];
    }

    if (timeOfDay === "dinner") {
      return ["Biryani", "Paneer Butter Masala", "Roti"];
    }

    // default
    return userClicks > 5
      ? ["Pizza", "Burger", "Fries"]
      : ["Meals", "Rice Bowl", "Curd Rice"];
  },
};

