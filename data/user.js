export let isUserSignedIn=JSON.parse(localStorage.getItem('signIn'))||false

export function changeSignInValue(value){
  isUserSignedIn = value
  localStorage.setItem('signIn',JSON.stringify(isUserSignedIn))
}

export let user=JSON.parse(localStorage.getItem('nibble-user'))||[]