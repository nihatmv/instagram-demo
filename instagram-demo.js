const searchIcon = document.querySelector('.search-icon');
const exploreSidebar = document.querySelector('.explore-sidebar');

// console.log(exploreSidebar);

searchIcon.addEventListener('click', clickSearch);
window.addEventListener('click', clickk);



function clickSearch () {
    exploreSidebar.classList.toggle('visible');
}
