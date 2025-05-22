let recipes = [];
async function fetchRecipes() {
  try {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    if (!response.ok) {
      throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    recipes=data.categories
    console.log(recipes)

  } catch (error) {
    console.error("Error fetching quiz questions:", error);
    return [];
  }
}
console.log(fetchRecipes())
