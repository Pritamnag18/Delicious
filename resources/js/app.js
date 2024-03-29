//NOTE for Notification Items   
import axios from 'axios'
import Noty from 'noty'


let addToCart = document.querySelectorAll('.add-to-cart')
let cartCounter = document.querySelector('#cartCounter')
function updateCart(pizza){
   axios.post('/update-cart', pizza).then(res => {
       cartCounter.innerText = res.data.totalQty
       new Noty({
           type: 'success',
           timeout: 1000,
           text: 'Item added to cart',
           progressBar: false,
        //    layout: 'topLeft'
       }).show();
   }).catch(err => {
    new Noty({
        type: 'error',
        timeout: 1000,
        text: 'Something went wrong',
        progressBar: false,
     //    layout: 'topLeft'
    }).show();
   })
}



addToCart.forEach((btn) => {
  btn.addEventListener('click', (e) => {
      let pizza = JSON.parse(btn.dataset.pizza) //getting data from home.ejs as an object. it have to do opposite of data present in home.ejs.
      updateCart(pizza) 
  })
})

//Remove alert message after X seconds
// const alertMsg = document.querySelector('#success-alert')
// if(alertMsg) {
//     setTimeout(() => {
//         alertMsg.remove()
//     }, 2000)
// }















// import axios from 'axios'
//  import Noty from 'noty'
//  import initAdmin  from './admin'
//  import moment from 'moment'
 

// let addToCart = document.querySelectorAll('.add-to-cart')
// let cartCounter = document.querySelector('#cartCounter')

// function updateCart(pizza) {
//     axios.post('/update-cart', pizza).then(res => {
//         cartCounter.innerText = res.data.totalQty
//         new Noty({
//             type: 'success',
//             timeout: 1000,
//             text: 'Item added to cart',
//             progressBar: false,
//         }).show();
//     }).catch(err => {
//         new Noty({
//             type: 'error',
//             timeout: 1000,
//             text: 'Something went wrong',
//             progressBar: false,
//         }).show();
//     })
// }

// addToCart.forEach((btn) => {
//     btn.addEventListener('click', (e) => {
//         let pizza = JSON.parse(btn.dataset.pizza)
//         updateCart(pizza)
//     })
// })

// // Remove alert message after X seconds
// const alertMsg = document.querySelector('#success-alert')
// if(alertMsg) {
//     setTimeout(() => {
//         alertMsg.remove()
//     }, 2000)
// }




