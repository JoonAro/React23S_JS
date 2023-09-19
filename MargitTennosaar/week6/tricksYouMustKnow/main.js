const returnTop = document.querySelector('#backToTop');

const goToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


returnTop.addEventListener('click', goToTop)