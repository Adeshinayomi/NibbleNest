import {fetchAllRecipes,allRecipes,getRecipesByCategories} from "../data/recipe.js";
import { loadRecipe } from "./component/TrendingRecipes.js";
import { toggleSideBar } from "./component/header.js";
import { pagination } from "./component/pagination.js";
toggleSideBar()
pagination();
 
loadRecipe();
let currentPage=1;
const recipesPerPage=6;

async function renderAllRecipes(direction='right'){
   document.querySelector('.js-all-recipes-cont').classList.add(direction==='right'?'slide-in-right':'slide-in-left');

  await fetchAllRecipes();

  setTimeout(()=>{
    const start=(currentPage-1)*recipesPerPage
  const end=start+recipesPerPage
  const visibleRecipes=allRecipes.slice(start,end);

  let html=''
  visibleRecipes.forEach((recipe)=>{
    html+=
      `
       <div class="recipe-card js-recipe-card">
          <div class="recipe-image">
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
    })
  

    document.querySelector('.js-all-recipes-cont').classList.remove('slide-in');
    void document.querySelector('.js-all-recipes-cont').offsetWidth;
    document.querySelector('.js-all-recipes-cont').classList.add('slide-in')
    document.querySelector('.js-all-recipes-cont').innerHTML=html

    document.querySelectorAll('.js-view-recipe-btn').forEach((btn)=>{
      btn.addEventListener('click',()=>{
        console.log('clicked')
        const recipeId=btn.dataset.recipeId
        window.location=`single-recipe.html?id=${recipeId}`
      })
    })
  })
  

}
renderAllRecipes()
    
document.querySelector('.js-recipe-prev-btn').addEventListener('click',()=>{
  if(currentPage>1){
    currentPage--
    renderAllRecipes('right')
  }
})
document.querySelector('.js-recipe-next-btn').addEventListener('click',()=>{
  const totalPages=Math.ceil(allRecipes.length/recipesPerPage);
  if(currentPage<totalPages){
    currentPage++
    renderAllRecipes('left')
  }
})
async function renderCategoryRecipes(){
  await fetchAllRecipes()
  const url=new URL(window.location.href)
  const category=url.searchParams.get('category');
  const categoryRecipes=getRecipesByCategories(category);
  let html=''
  categoryRecipes.forEach((recipe)=>{
    html+=
     `
       <div class="recipe-card js-recipe-card">
          <div class="recipe-image">
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
  })

    document.querySelector('.js-all-recipes-cont').classList.remove('slide-in');
    void document.querySelector('.js-all-recipes-cont').offsetWidth;
    document.querySelector('.js-all-recipes-cont').classList.add('slide-in')
    document.querySelector('.js-all-recipes-cont').innerHTML=html

      document.querySelectorAll('.js-view-recipe-btn').forEach((btn)=>{
      btn.addEventListener('click',()=>{
        console.log('clicked')
        const recipeId=btn.dataset.recipeId
        window.location=`single-recipe.html?id=${recipeId}`
      })
    })
}
renderCategoryRecipes()
// document.querySelectorAll('.js-view-recipe-btn').forEach((btn)=>{ 
//   btn.addEventListener('click',()=>{
//     const recipeId=btn.dataset.recipeId
//     window.location=`single-recipe.html?id=${recipeId}`
//   })                
// })