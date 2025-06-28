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
export function searchRecipes(searchItem){
    let matchingRecipes=[]
    allRecipes.forEach((recipe)=>{
        const name=recipe.strMeal
        if(name.toLowerCase().includes(searchItem.toLowerCase())){
            matchingRecipes.push(recipe)
        }
    })
    return matchingRecipes; 
}
export function getRecipesByCategories(category){
    let categoryRecipes=[] 
    allRecipes.forEach((recipes)=>{
        if(recipes.strCategory.toLowerCase() === category){
            categoryRecipes.push(recipes);
        }
    }) 
    return categoryRecipes;
}
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