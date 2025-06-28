import {fetchAllRecipes,allRecipes,getRecipesByCategories,searchRecipes} from "../data/recipe.js";
import { loadRecipe } from "./component/TrendingRecipes.js";
import { toggleSideBar } from "./component/header.js";
import { pagination } from "./component/pagination.js";
import { search } from "./component/searchRecipes.js";
import { addRecipe } from "./component/addRecipe.js";
toggleSideBar()
pagination()
search()
loadRecipe()

let currentPage=1;
const recipesPerPage=6;

async function renderAllRecipes(){
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
    addRecipe()
  })

  document.querySelector('.js-recipe-prev-btn').addEventListener('click',()=>{
    if(currentPage>1){
      currentPage--
      renderAllRecipes()
    }
  })
  document.querySelector('.js-recipe-next-btn').addEventListener('click',()=>{
    const totalPages=Math.ceil(allRecipes.length/recipesPerPage);
    if(currentPage<totalPages){
      currentPage++
      renderAllRecipes()
    }
  })

}
async function renderCategoryRecipes(){
  await fetchAllRecipes()
  const url=new URL(window.location.href)
  const category=url.searchParams.get('category');
  const categoryRecipes=getRecipesByCategories(category);
  let html=''
  setTimeout(()=>{
    const start=(currentPage-1)*recipesPerPage
    const end=start+recipesPerPage
    const visibleRecipes=categoryRecipes.slice(start,end);

    visibleRecipes.forEach((recipe)=>{
    html+=
    `
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
    addRecipe()
  })
  document.querySelector('.js-recipe-prev-btn').addEventListener('click',()=>{
    if(currentPage>1){
      currentPage--
      renderCategoryRecipes()
    }
  })

  document.querySelector('.js-recipe-next-btn').addEventListener('click',()=>{
    const totalPages=Math.ceil(categoryRecipes.length/recipesPerPage);
    if(currentPage<totalPages){
      currentPage++
      renderCategoryRecipes()
    }
  })
}
async function renderSearchRecipes(){
  await fetchAllRecipes()  
  const url=new URL(window.location.href)
  const search=url.searchParams.get('search');
  const recipes=searchRecipes(search);
  let html=''
  setTimeout(()=>{
    const start=(currentPage-1)*recipesPerPage
    const end=start+recipesPerPage
    const visibleRecipes=recipes.slice(start,end);

    visibleRecipes.forEach((recipe)=>{
    html+=
    `
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
    addRecipe()
  })

  document.querySelector('.js-recipe-prev-btn').addEventListener('click',()=>{
    if(currentPage>1){
      currentPage--
      renderSearchRecipes()
    }
  })
  document.querySelector('.js-recipe-next-btn').addEventListener('click',()=>{
    const totalPages=Math.ceil(recipes.length/recipesPerPage);
    if(currentPage<totalPages){
      currentPage++
      renderSearchRecipes()
    }
  })
}

document.querySelectorAll('.category-btns').forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        document.querySelectorAll('.category-btns').forEach((btn)=>{
          btn.classList.remove('active')
        })
        e.target.classList.add('active')
        // Recipes=allRecipes.filter((recipe)=>{
        //   return recipe.strCategory.toLowerCase() === e.target.innerHTML.toLowerCase()
        // })
    })
  })
  
if(window.location.search.includes('category')){
  renderCategoryRecipes()
}else if(window.location.search.includes('search')){
  renderSearchRecipes()
} else {
  renderAllRecipes()
}