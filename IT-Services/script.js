var hammenu = document.querySelector('#ham-menu');
var hamitems = document.querySelector('#ham-items');

hamburger.addEventListener('click', () => {
    hamitems.classList.toggle("is-active");
})