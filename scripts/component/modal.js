import { isUserSignedIn,user,changeSignInValue } from "../../data/user.js"
export function toggleModal(){
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
    changeSignInValue()
    document.querySelector('.modal').style.display="none"
    document.querySelector('.sign-up').style.display='none'
  })
}