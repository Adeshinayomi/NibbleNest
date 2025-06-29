export  function search(){
  document.querySelector('.js-search-btn').addEventListener('click',()=>{
    const searchItem=document.querySelector('.js-search-string')
    window.location=`recipe.html?search=${searchItem.value}`
  })
} 