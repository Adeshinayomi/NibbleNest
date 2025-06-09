export function pagination(){
  const prevBtn=document.querySelectorAll('.prev-btn');
  const nextBtn=document.querySelectorAll('.next-btn');
  const recipeCont=document.querySelectorAll('.js-slider')

  let counter=0
  nextBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      if(counter<3){
        counter++
        recipeCont.forEach((cont)=>{
          cont.scrollLeft=counter*350
        })
      }else{
        counter=0
        recipeCont.forEach((cont)=>{
          cont.scrollLeft=counter*100
        })
      } 
    })
  })
  prevBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
      if(counter>0){ 
        counter--
        recipeCont.forEach((cont)=>{
          cont.scrollLeft=counter*350
        })
      }else{
        counter=3
        recipeCont.forEach((cont)=>{
          cont.scrollLeft=counter*350
        })
      }
   })
  })
}