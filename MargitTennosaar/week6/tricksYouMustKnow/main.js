const returnTop = document.querySelector('#backToTop');
//back to top button
const mobButton = document.querySelector('.mobile')
const nav = document.querySelector('nav ul')
//browser onscroll event trigger
window.onscroll = function() {scrollFunction()};

//code w3c for two browsers
function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      returnTop.style.display = "block";
    } else {
      returnTop.style.display = "none";
    }
  }

const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

const mobMenu = () => {
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
    }else {
        nav.classList.contains('responsive');
    }
}

returnTop.addEventListener('click', goToTop);
mobButton.addEventListener('click', mobMenu);