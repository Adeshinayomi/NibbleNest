import { favouriteRecipe} from "../data/favouriteRcipe.js";
import { getRecipes,fetchAllRecipes} from "../data/recipe.js";

let currentPage=1;
const recipesPerPage=6;

const allRecipe=[]
async function loadfavourite(){
  await fetchAllRecipes();
  favouriteRecipe.forEach((recipe)=>{
   allRecipe.push(getRecipes(recipe.id))
  })
}

await loadfavourite()

function renderStuff(){
  let html=''
  setTimeout(()=>{
    const start=(currentPage-1)*recipesPerPage
    const end=start+recipesPerPage
    const visibleRecipes=allRecipe.slice(start,end);

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

  if(allRecipe.length-1 < 6){
    document.querySelector('.js-recipe-next-btn').style.display='none'
  }else{
    document.querySelector('.js-recipe-next-btn').style.display='flex' 
  }

  if(currentPage>1){
    document.querySelector('.js-recipe-prev-btn').style.display='flex'
  }else{
    document.querySelector('.js-recipe-prev-btn').style.display='none'
  }


  document.querySelector('.js-recipe-prev-btn').addEventListener('click',()=>{
    if(currentPage>1){
      currentPage--
      renderStuff()
    }
  })
  document.querySelector('.js-recipe-next-btn').addEventListener('click',()=>{
    const totalPages=Math.ceil(allRecipe.length/recipesPerPage);
    if(currentPage<totalPages){
      currentPage++
      renderStuff()
    }
  })
}

async function renderFavoriteRecipe(){
  let html=''
  await fetchAllRecipes();
  favouriteRecipe.forEach((recip)=>{
    const recipe=getRecipes(recip.id)
    html+=
    `
        <div class="recipe-card js-recipe-card">
            <div class="recipe-image">
              <div class="js-favourite-icon favourite-icon">
              <img src="images/icons/heart (3).png" alt="">
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
    document.querySelector('.js-all-recipes-cont').innerHTML=html;
    document.querySelectorAll('.js-view-recipe-btn').forEach((btn)=>{
      btn.addEventListener('click',()=>{
        console.log('clicked')
        const recipeId=btn.dataset.recipeId
        window.location=`single-recipe.html?id=${recipeId}`
      })
    })
  })  
}

renderStuff()

document.querySelector('.js-clear-favorites').addEventListener('click',()=>{
  localStorage.removeItem('favorite');
  allRecipe.length=0;
  renderStuff()
})
document.querySelector('.back-icon').addEventListener('click',()=>{
  history.back();
})