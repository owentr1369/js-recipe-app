function getRandomMeal() {
  fetch("https://www.themealdb.com/api/json/v1/1/random.php");
}
function getMealById(id) {
  fetch(`www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
}
function getMealsBySearch(term) {
  fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${tern}`);
}
