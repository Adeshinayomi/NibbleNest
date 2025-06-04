export function pagination(){
  const prevBtn=document.querySelector('.prev-btn');
  const nextBtn=document.querySelector('.next-btn');
  const recipeCard=document.querySelectorAll('.js-recipe-card');

  let counter=1
  nextBtn.addEventListener('click',()=>{
    if(counter<4){
      recipeCard.forEach((recipeCard=>{
        recipeCard.style.transform=`translateX(-${counter*110}%)`
      }))
      counter++
      console.log(counter)
    }else{
      counter=0
      recipeCard.forEach((recipeCard=>{
        recipeCard.style.transform=`translateX(-${counter*110}%)`
      }))
      console.log(counter)
    }
    
  })
  prevBtn.addEventListener('click',()=>{
    if(counter>0){
      counter--
      recipeCard.forEach((recipeCard=>{
       recipeCard.style.transform=`translateX(-${counter*110}%)`
      }))
      console.log(counter)
    }else{
      counter=3
      recipeCard.forEach((recipeCard=>{
       recipeCard.style.transform=`translateX(-${counter*110}%)`
      }))
      console.log(counter)
    }
  })
}