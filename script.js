new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  scrollHorizontally: true,
  slidesNavigation: true,

  controlArrows: true,
  sectionsColor: ["#C0C0C0", "#C0C0C0", "#C0C0C0"],

  navigationTooltips: ["Podłogi", "Drzwi", "Okna", "Kontakt"],
  anchors: ["floor", "door", "window", "contact"],

  responsiveSlides: true,
});


// const close = document.querySelector('#close')
// const menu = document.querySelector('#menu')
// const mobileNav = document.querySelector('#mobile-nav')


// menu.addEventListener('click', ()=>{
//   mobileNav.style.display = 'block'
// })
// close.addEventListener('click', ()=>{
//   mobileNav.style.display = 'none'
// })