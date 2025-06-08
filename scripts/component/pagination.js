export function pagination(){
  const prevBtn=document.querySelectorAll('.prev-btn');
  const nextBtn=document.querySelectorAll('.next-btn');
  const recipeCont=document.querySelector('.js-recipes-cont')

  let counter=0
  nextBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      if(counter<3){
        counter++
        recipeCont.scrollLeft=counter*350
      }else{
        counter=0
        recipeCont.scrollLeft=counter*100
      } 
    })
  })
  prevBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      if(counter>0){ 
        counter--
        recipeCont.scrollLeft=counter*350
      }else{
        counter=3
        recipeCont.scrollLeft=counter*300
      }
   })
  })
}