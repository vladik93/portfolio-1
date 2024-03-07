console.log('script.js is running');

const headerEl = document.getElementById('header');

let headerOffsetTop = headerEl.offsetTop;


window.addEventListener('scroll', (e) => {
  let scrollY = window.scrollY;

  if(scrollY > headerOffsetTop) {
    headerEl.classList.add('fixed');
 
  } else {
    headerEl.classList.remove('fixed');
  }
});