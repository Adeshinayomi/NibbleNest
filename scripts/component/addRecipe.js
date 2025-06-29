import { favouriteRecipe } from "../../data/favouriteRcipe.js"
import { isUserSignedIn } from "../../data/user.js"
export function addRecipe(){
  document.querySelectorAll('.add-recipe').forEach((btn)=>{
    btn.addEventListener('click',()=>{
      if(isUserSignedIn){
        const id=btn.dataset.id
        favouriteRecipe.push({
          id:id
        })
        console.log(favouriteRecipe)
        localStorage.setItem('favorite',JSON.stringify(favouriteRecipe))
      }else{
        document.querySelector('.modal').style.display="block"
      }
    })
  })
}