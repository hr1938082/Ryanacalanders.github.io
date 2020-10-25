//Navbar-Script-Start
$(window).on('scroll',function(){
    if($(window).scrollTop())
    {
        $('nav').addClass('black');
    }
    else
    {
        $('nav').removeClass('black');
    }
});
//Navbar-Script-Start
//MD-Navbar-Script-Start
$(document).ready(function(){
    $('#open').click(function(){
        $('#open').toggleClass("cross")
    });
    $('#open').click(function(){
        $('.menu').toggleClass("cross")
    });
});
//MD-Navbar-Script-End
//Product Section Start
var currentSlide = 1;
var $slider = $(".slides");
var slideCount = $slider.children().length;

console.log(slideCount);
//Product Section End