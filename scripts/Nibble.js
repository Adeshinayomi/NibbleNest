import { toggleSideBar } from "./component/header.js";
import { pagination } from "./component/pagination.js";
import { loadRecipe } from "./component/TrendingRecipes.js";
import {search} from "./component/searchRecipes.js";
import {toggleModal } from "./component/modal.js";
import { loader } from "./component/loader.js";
loadRecipe();
toggleSideBar()
pagination();
loader()
const categoryBtns=document.querySelectorAll('.js-category-btn');
 categoryBtns.forEach((btn)=>{
  const category=btn.innerHTML.toLowerCase()
  btn.addEventListener('click',()=>{
    window.location=`recipe.html?category=${category}`
  })
 }) 
search()
toggleModal()