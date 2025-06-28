import { favouriteRecipe } from "../../data/favouriteRcipe.js"
export function addRecipe(){
  document.querySelectorAll('.add-recipe').forEach((btn)=>{
    btn.addEventListener('click',()=>{
      const id=btn.dataset.id
      favouriteRecipe.push({
        id:id
      })
      console.log(favouriteRecipe)
      localStorage.setItem('favorite',JSON.stringify(favouriteRecipe))
    })
  })
}