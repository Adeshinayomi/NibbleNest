import { isUserSignedIn,user,changeSignInValue } from "../../data/user.js"

export function toggleModal(){

  if(isUserSignedIn){

    document.querySelector('.sign-up').style.display='none'  
  }
  
  document.querySelectorAll('.toggle-modal').forEach((btn)=>{

    btn.addEventListener('click',()=>{

      if(isUserSignedIn === false){
        document.querySelector('.modal').style.display="block"
      }

    })

  })

  document.querySelector('.cancel-modal').addEventListener('click',()=>{

    document.querySelector('.modal').style.display="none"

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
    window.location='index.html'
    
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
}