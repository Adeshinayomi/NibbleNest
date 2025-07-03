import { isUserSignedIn,user,changeSignInValue } from "../../data/user.js"

export function toggleModal(){
  if(isUserSignedIn){
   document.querySelector('.user-name').innerHTML= JSON.parse(localStorage.getItem('user-name'))
   document.querySelector('.sign-up').style.display='none'  
  }
  
  document.querySelectorAll('.toggle-modal').forEach((btn)=>{
    btn.addEventListener('click',()=>{

      if(isUserSignedIn === false){
        const hamBurger=document.querySelector('.js-hamburger');
        const sideBar=document.querySelector('.js-sidebar')
        const hero=document.querySelector('.js-hero')
        hamBurger.innerHTML='<img src="images/icons/hamburger.png" alt="">'

        hero.classList.remove('hide')
        hamBurger.classList.toggle('grow')
        sideBar.classList.remove('visible');
        document.querySelector('.modal').style.display="block"
      }

    })

  })

  document.querySelectorAll('.cancel-modal').forEach((btn)=>{
    btn.addEventListener('click',()=>{

     document.querySelector('.modal').style.display="none"

    })
  })

  document.querySelector('.modal-form').addEventListener("submit",(e)=>{

    const name=document.querySelector('.name')
    const email=document.querySelector('.email')
    const password=document.querySelector('.password')
    e.preventDefault()
    user.push({
      name:name.value,
      email:email.value,
      password:password.value
    })
    localStorage.setItem('nibble-user',JSON.stringify(user))
    changeSignInValue(true)
    document.querySelector('.user-name').innerHTML=name.value 
    document.querySelector('.modal').style.display="none"
    window.location=`${window.location.href}`
  })

  document.querySelector('.profile').addEventListener('click',()=>{

    if(isUserSignedIn){
      document.querySelector('.user-info').classList.toggle('show-user')
    }

  })

  document.querySelector('.log-out-btn').addEventListener('click',()=>{
    changeSignInValue(false)
    window.location='index.html'
  })

  document.querySelector('.fav-icon').addEventListener('click',()=>{

    if(isUserSignedIn){
      window.location='favourite.html'
    }else{
      document.querySelector('.modal').style.display="block"
    }

  })


  document.querySelectorAll('.modal-btn').forEach((btn)=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.modal-cont').forEach((modal)=>{
        modal.classList.toggle('hide-modal')
      })
    })
  })


  document.querySelector('.login-form').addEventListener("submit",(e)=>{

    const email=document.querySelector('.login-email')
    const password=document.querySelector('.login-password')

    e.preventDefault()
      user.forEach((info)=>{
        console.log(email.value)
        if(email.value === info.email && password.value === info.password){
          changeSignInValue(true)
          document.querySelector('.modal').style.display="none"
          localStorage.setItem('user-name',JSON.stringify(info.name))
          window.location=`${window.location.href}`
        }
      })
  })
}