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
            scrollTop: $("#about").offset().top
        }, 1000);

    });

});



//scroll top
document.addEventListener('DOMContentLoaded', function(){
    var scroll = document.querySelector('.top');
    var interval = null;

    window.addEventListener('scroll', function(){
        if (this.pageYOffset > 350) {
            scroll.classList.add('show-icon');
        }
        else{
            scroll.classList.remove('show-icon');
        }
    });

    scroll.addEventListener('click', function(){
        if(interval == null) {
            interval = setInterval(function(){
                scrollToTop(-1);
            }, 10);
        }
    });

    function scrollToTop(speed){
        if (window.pageYOffset > 10) {
            speed = 10*speed*(2-speed);
            scrollBy(0,speed);
        }
        else{
            clearInterval(interval);
            interval = null;
        }
    }
});