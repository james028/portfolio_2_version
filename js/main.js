var nav1 = document.querySelector(".nav-bar__menu-btn"),
    nav2 = document.querySelector(".nav-bar__nav"),
    nav3 =  document.querySelector(".nav-bar");


//toggle menu
nav1.addEventListener('click', function(e){
  e.stopPropagation();
  nav3.classList.toggle('nav-bar_open');
}, false);

nav2.addEventListener('click', function(e){
  e.stopPropagation();
}, false);

//close menu if is's not focused
document.addEventListener("click", function (){
 nav3.classList.remove('nav-bar_open');
}, false);