import { toggleSideBar } from "./component/header.js";
import { pagination } from "./component/pagination.js";
import { loadRecipe } from "./component/TrendingRecipes.js";
loadRecipe();
toggleSideBar()
pagination();
const categoryBtns=document.querySelectorAll('.js-category-btn');
 categoryBtns.forEach((btn)=>{
  const category=btn.innerHTML.toLowerCase()
  btn.addEventListener('click',()=>{
    window.location=`recipe.html?category=${category}`
  })
 }) 
