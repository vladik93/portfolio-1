console.log('script.js is running');

const headerEl = document.getElementById('header');
const profileWrapperEl = document.getElementById('profile-wrapper');

let headerOffsetTop = headerEl.offsetTop;


window.addEventListener('scroll', (e) => {
  let scrollY = window.scrollY;

  if(scrollY > headerOffsetTop) {
    headerEl.classList.add('fixed');
 
  } else {
    headerEl.classList.remove('fixed');
  }
});

// ABOUT 

let  profileOffsetTop = profileWrapperEl.offsetTop - 30;


window.addEventListener('scroll', () => {
  let x = 0;

  if(window.scrollY > profileOffsetTop) {
    console.log(scrollY);
    x += 10;
    profileWrapperEl.style.backgroundPositionY = x + "%";
  } else {
    x -= 10;
    profileWrapperEl.style.backgroundPositionY = x + "%";
  }
})




