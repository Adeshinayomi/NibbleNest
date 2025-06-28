import {fetchAllRecipes,allRecipes} from "../../data/recipe.js";
import {addRecipe} from "./addRecipe.js";
  let html=``
export async function loadRecipe(){
  await fetchAllRecipes()
  
  for(let i=0;i<=6-1;i++){
    const index=(Math.round(Math.random()*(allRecipes.length-1)));
    const recipe=allRecipes[index];
    html+=`
        <div class="recipe-card js-recipe-card">
          <div class="recipe-image">
            <div class="js-favourite-icon favourite-icon">
             <img class="add-recipe" data-id="${recipe.idMeal}" src="images/icons/heart (3).png" alt="">
            </div>
            <img src="${recipe.strMealThumb}" alt="">
          </div>
          <div class="recipe-detail">
            <div class="name">
              <h4>${recipe.strMeal}</h4>
              <span class="rating">
                <span>4.5</span>
                <div class="star">
                  <img src="images/icons/star (2).png" alt="">
                </div>
              </span>
            </div>
            <button class="primary-btn js-view-recipe-btn" data-recipe-id="${recipe.idMeal}">
              <span>view recipe</span>
              <img src="images/icons/arrow-right (1).png" alt="">
            </button>
          </div>
        </div>
    `
  }
  document.querySelector(".js-recipes-cont").innerHTML=html;
  document.querySelectorAll('.js-view-recipe-btn').forEach((btn)=>{
    btn.addEventListener('click',()=>{
      const recipeId=btn.dataset.recipeId
      window.location=`single-recipe.html?id=${recipeId}`
    })
  })
  addRecipe();
}



