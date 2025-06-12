export let allRecipes=[]
export function getRecipes(recipesId){
           let matchingRecipes;
    allRecipes.forEach((recipe)=>{

        if(recipe.idMeal===recipesId){
           matchingRecipes=recipe
        }
      
    })
      return  matchingRecipes
}
getRecipes('52772') // Example call to getRecipes
export  async function fetchAllRecipes(){
    const letters='abcdefghijklmnopqrstuvwxyz'
    for(let letter of letters){
        const response=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        const data= await response.json();
        if(data.meals){
            allRecipes.push(...data.meals)
        }
    }
 }