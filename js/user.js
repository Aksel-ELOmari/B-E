let mah_carousel = document.getElementById('elmahjob_carousel');
let moh_carousel = document.getElementById('mohamed_carousel');

let hero_cover = document.querySelector('.hero_img-box img');


// mah_carousel.classList.contains('active')?console.log('yes'):console.log('No');
// moh_carousel.classList.contains('active')?console.log('yes'):console.log('No');

// window.addEventListener(HashChangeEvent =>{
//     mah_carousel.classList.contains('active')?console.log('yes'):console.log('No');
//     moh_carousel.classList.contains('active')?console.log('yes'):console.log('No');
// })

window.addEventListener('DOMContentLoaded',()=>{
    mah_carousel.classList.contains('active')?console.log('yes'):console.log('No');
    moh_carousel.classList.contains('active')?console.log('yes'):console.log('No');
})