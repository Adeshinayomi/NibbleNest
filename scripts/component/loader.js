import { fetchAllRecipes } from "../../data/recipe.js";
export function loader(){
  window.addEventListener('load',async()=>{
    await fetchAllRecipes();
    document.querySelector('.loader').style.display='none'
    document.querySelector('.animate-text').classList.add('animate-fade');
    document.querySelector('.animate-block').classList.add('animate-slide');
  })
}