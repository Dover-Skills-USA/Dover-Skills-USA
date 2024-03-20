const nav_btn = this.document.querySelector('.nav-btn');
const nav_dropdown = this.document.querySelector('nav>div.wrapper');

// Nav dropdown functions ///////////////////////////////////////////////////////////////////////
function nav_hover() {
  nav_btn.classList.add('hover');
  nav_dropdown.classList.add('hover');
}

function nav_leave() {
  nav_btn.classList.remove('hover');
  nav_dropdown.classList.remove('hover');
}



// Small Nav ///////////////////////////////////////////////////////////////////////
const menuBtn = document.getElementById('menu-btn');
const smallNav = document.querySelector('nav.small-nav');
const html = document.querySelector('html');

menuBtn.addEventListener('click', () => {
  smallNav.classList.toggle('active');
  html.classList.toggle('inactive')
});



// Images ///////////////////////////////////////////////////////////////////////
const images = document.querySelectorAll('img');

document.addEventListener('DOMContentLoaded', () => {
  images.forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
    }
  });
});