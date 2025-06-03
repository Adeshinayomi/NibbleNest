  // sideBar
  export function toggleSideBar(){
    const hamBurger=document.querySelector('.js-hamburger');
    const sideBar=document.querySelector('.js-sidebar')

    hamBurger.addEventListener('click',()=>{ 
      if(hamBurger.innerHTML !== '<img src="/images/icons/button.png">'){
        hamBurger.innerHTML='<img src="/images/icons/button.png">'
      }else{
        hamBurger.innerHTML='<img src="/images/icons/hamburger.png">'
      }
      sideBar.classList.toggle('visible');
    })
  }


