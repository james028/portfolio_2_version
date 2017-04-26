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

document.addEventListener("click", function (){
 nav3.classList.remove('nav-bar_open');
}, false);



//scroll down jquery

$(document).ready(function() {

    $(".scroll-section").click(function(e) {

        var linkhref = $(this).attr("href");

        $("html, body").animate({
            scrollTop: $(linkhref).offset().top
        }, 1500);

        e.preventDefault();
    });

    $("#btn-1").click(function() {
        $("html, body").animate({
            scrollTop: $("#aboutme").offset().top
        }, 1000);

    });

});
