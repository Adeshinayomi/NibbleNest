import { pagination } from "./component/pagination.js";
import { toggleSideBar } from "./component/header.js";
import { countDown } from "./component/countDown.js";
import {toggleModal } from "./component/modal.js";
import { loader } from "./component/loader.js";

loader()
toggleModal()
pagination()
toggleSideBar()


const countDownCont=document.querySelector('.comapny-details');

const countDownOption={
  root:null,
  threshold:0,
  rootMargin:"0px",
};

const  startCountDown=new IntersectionObserver(function(entries,count){
    entries.forEach(entry =>{
      if(!entry.isIntersecting){
        return;
      }else{
        countDown("activeUser",200,'.js-active-users')
        countDown('foodRecipe',1000,'.js-food-recipe')
        countDown('reviews',150,'.js-customer-review')
        count.unobserve(entry.target);
      };
    });
},countDownOption);

startCountDown.observe(countDownCont);


// function countDown(){
//  let activeUser=0;
//  let foodRecipe=0;
//  let reviews=0;

// //  const activeUsertimer=setInterval(()=>{
// //     activeUser++
// //     document.querySelector('.js-active-users').innerHTML=activeUser + '+'
// //     if(activeUser === 200){
// //       clearInterval(activeUsertimer)
// //     } 
// //   },5)
//   const foodRecipetimer=setInterval(()=>{
//     foodRecipe++
//     document.querySelector('.js-food-recipe').innerHTML=foodRecipe + '+'
//     if(foodRecipe === 1000){
//       clearInterval(foodRecipetimer)
//     } 
//   },)
//   const reviewtimer=setInterval(()=>{
//     reviews++
//     document.querySelector('.js-customer-review').innerHTML=reviews + '+'
//     if(reviews === 150){
//       clearInterval(reviewtimer)
//     } 
//   },5)

// }
// countDown() 