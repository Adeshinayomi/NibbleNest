export function countDown(item,number,name){
  item=0
   const timer=setInterval(()=>{
    item++
    document.querySelector(`${name}`).innerHTML=item + '+'
    if(item === number){
      clearInterval(timer)
    } 
  },5)
}