import {fetchAllRecipes, getRecipes} from "../data/recipe.js";
import { toggleSideBar } from "./component/header.js";
import { pagination } from "./component/pagination.js";
import { loadRecipe } from "./component/TrendingRecipes.js";
import {toggleModal } from "./component/modal.js";
loadRecipe();
toggleModal()
toggleSideBar()
pagination();
async function renderRecipe(){
  await fetchAllRecipes()
  const url=new URL(window.location.href)
  const id=url.searchParams.get('id');

  let matchingRecipes=getRecipes(id);
  document.querySelector('.js-recipy').innerHTML=
  `
  <section class="recipy js-hero">
      <div class="recipy-cont">
        <div class="recipy-image">
          <img src="${matchingRecipes.strMealThumb}" alt="">
        </div>
        <div class="recipy-title">
          <h1>${matchingRecipes.strMeal}</h1>
          <div class="recipy-category-btns">
            <button class="primary-btn">${matchingRecipes.strCategory}</button>
            <button class="primary-btn">${matchingRecipes.strArea}</button>
          </div>
        </div>
      </div>
    </section>
    <section class="recipy-details">
      <div class="recipy-ingredient">
        <h2>Ingredients</h2>
        <ul>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strIngredient1}</li>
          <li><img src="images/icons/check.png" alt=""> ${matchingRecipes.strIngredient2}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strIngredient3}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strIngredient4}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strIngredient5}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strIngredient6}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strIngredient7}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strIngredient8}</li>
        </ul>
      </div>
      <div class="recipe-measurements">
        <h2>Measurements</h2>
        <ul>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strMeasure1}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strMeasure2}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strMeasure3}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strMeasure4}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strMeasure5}</li>
          <li><img src="images/icons/check.png" alt="">${matchingRecipes.strMeasure6}</li>
          <li><img src="images/icons/check.png" alt="">	${matchingRecipes.strMeasure7}</li>
          <li><img src="images/icons/check.png" alt="">	${matchingRecipes.strMeasure8}</li>
        </ul>
      </div>
    </section>
    <section class="recipy-instructions">
      <div class="recipy-instruction-cont">
        <div class="recipy-vid">
          <img src="${matchingRecipes.strMealThumb}" alt="">
          <img src="images/icons/play-button (2).png" alt="" class="play-btn">
        </div>
        <div class="instructions">
          <h2>Instructions</h2>
          <p>
            ${matchingRecipes.strInstructions}
          </p>
        </div>
      </div>
    </section>
  </main>
  `
} 
renderRecipe();