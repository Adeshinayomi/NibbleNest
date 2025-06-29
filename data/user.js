export let isUserSignedIn=JSON.parse(localStorage.getItem('signIn'))||false

export function changeSignInValue(){
  isUserSignedIn = true
  localStorage.setItem('signIn',JSON.stringify(isUserSignedIn))
}

export let user=JSON.parse(localStorage.getItem('nibble-user'))||[]