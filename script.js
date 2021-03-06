const meals = document.getElementById("meals");

async function getRandomMeal() {
  const resp = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const respData = await resp.json();
  const randomMeal = respData.meals[0];

  console.log(randomMeal);

  addMeal(randomMeal, true);
}
async function getMealById(id) {
  const meal = await fetch(
    `www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
  );
}
async function getMealsBySearch(term) {
  const meals = await fetch(
    `www.themealdb.com/api/json/v1/1/search.php?s=${term}`
  );
}
getRandomMeal();
function addMeal(mealData, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");
  meal.innerHTML = `<div class="meal-header">
                    ${
                      random
                        ? `
                                <span class="random">Random Recipe</span>`
                        : ""
                    }
            <img
              src="${mealData.strMealThumb}"
              alt="${mealData.Meal}"
            />
          </div>
          <div class="meal-body">
            <h4>${mealData.strMeal}</h4>
            <button class="fav-btn">
              <i class="fa-regular fa-heart"></i>
            </button>
          </div>`;

  const btn = meal.querySelector(".meal-body .fav-btn");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });

  meals.appendChild(meal);
}
// Add meal to LocalStorage
function addMealToLS(mealId) {
  const mealIds = getMealsFromLS();
  localStorage.setItem("mealIds", JSON.stringify([...mealIds, mealId]));
}

// Get meal from LocalStorage
function getMealsFromLS() {
  const mealIds = JSON.parse(localStorage.getItem("mealIds"));

  return mealIds;
}
