  // sideBar
  export function toggleSideBar(){
    const hamBurger=document.querySelector('.js-hamburger');
    const sideBar=document.querySelector('.js-sidebar')
    const hero=document.querySelector('.js-hero')
    hamBurger.addEventListener('click',()=>{ 
      if(hamBurger.innerHTML !== '<img src="images/icons/button.png" alt="">'){
        hamBurger.innerHTML='<img src="images/icons/button.png" alt="">'
      }else{
        hamBurger.innerHTML='<img src="images/icons/hamburger.png" alt="">'
      }
      hero.classList.toggle('hide')
      hamBurger.classList.toggle('grow')
      sideBar.classList.toggle('visible');
    })
  }


