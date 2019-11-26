const burger = document.querySelector(".burger");
const iconBars = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const navBelt = document.querySelector(".nav");
const menu = document.querySelector(".menu");
const logo = document.querySelector(".logo");
const ul = document.querySelector(".menu ul");

burger.addEventListener("click", function () {
    iconBars.classList.toggle("show");
    iconX.classList.toggle("show");
    navBelt.classList.toggle("show");
    menu.classList.toggle("show");
    logo.classList.toggle("show");
    ul.classList.toggle("show");
})



// Scroll to section 
$('#start').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.brand-promise').offset().top,
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav, .menu, .logo').toggleClass("show")
    }
});

$('#profits').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.first-section').offset().top
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav, .menu, .logo').toggleClass("show")
    }
});



$('#app').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.second-section').offset().top
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav, .menu, .logo').toggleClass("show")
    }
});



$('#plugins').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.third-section').offset().top
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav, .menu, .logo').toggleClass("show")
    }
});

$('#contact').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.fourth-section').offset().top
    }, 500)

    if ($(window).width() < 1251) {
        $('.burger, .fa-bars, .fa-times, .nav, .menu, .logo').toggleClass("show")
    }
});



// jQuery validation 

// $(document).ready(function () {
//     $(".contact-form").validate({
//         rules: {
//             name: "required",
//             email: {
//                 required: true,
//                 email: true
//             }
//         }
//     })
// })


// $('.contact-form button').click(function (event) {
//     event.preventDefault();
//     $(".contact-form button").submit();
// })



$("form").validate({
    rules: {
        emailOrPhone: {
            required: true,
            regexp: /^(?:\d{9}|\w+@\w+\.\w{2,3})$/
        }
    }
});


$.validator.addMethod(
    "regexp",
    function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },
    'Please enter a valid email address or phone number.'
);

$('.register-btn').click(function (event) {
    event.preventDefault();

    $(".register-btn").submit();
})



// Sticky menu 
$(document).ready(function () {
    var NavY = $('.nav').offset().top;

    var stickyNav = function () {
        var ScrollY = $(window).scrollTop();

        if (ScrollY > NavY) {
            $('.nav').addClass('sticky');
        } else {
            $('.nav').removeClass('sticky');
        }
    };

    stickyNav();

    $(window).scroll(function () {
        stickyNav();
    });
});