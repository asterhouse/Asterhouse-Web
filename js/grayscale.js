/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(window).width() >= 768) {
        if ($(".navbar").offset().top > 50) {
            $(".navbar-custom .navbar-brand").show();
            //$(".navbar-custom .navbar-brand").visibility = "visible";
        } else {
            $(".navbar-brand").hide();
        }  
    }
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    
});

$('#myCarousel').carousel({
  interval: 6000
});

// window.onafterprint = function() {
//     $(".navbar-brand").hide();
// }

// $(window).on('scroll', function(e) {
//     if ($((".navbar").offset().top > 50) {
//         $('navbar-brand').show();
//         $(".navbar-fixed-top").addClass("top-nav-collapse");
//     }
//     else {
//         $('.navbar-brand').hide();
//         $(".navbar-fixed-top").removeClass("top-nav-collapse");
//     }
// });

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

function init() {
}




