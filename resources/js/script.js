$(document).ready(function () {

    /** For sticky navigation and go to the top button */
    $('.js-section-features').waypoint((direction) => {
        if (direction == 'down') {
            $('nav').addClass('sticky animate__fadeInDown');
            $('nav').removeClass('animate__fadeOutUp');

            $('.go-to-the-top').removeClass('hide animate__fadeOutRight');
            $('.go-to-the-top').addClass('animate__fadeInRight');
        }
        else {
            $('nav').removeClass('animate__fadeInDown');
            $('nav').addClass('animate__fadeOutUp');

            setTimeout(() => {
                $('nav').removeClass('sticky animate__fadeOutUp');
            }, 500);

            $('.go-to-the-top').addClass('hide, animate__fadeOutRight');
            $('.go-to-the-top').removeClass('animate__fadeInRight');
        }
    }, {
        offset: '5%'
    });

    // Scroll to plans
    $('.js-scroll-to-plan').click(() => {
        $('html, body').animate({ scrollTop: $('.js-section-plans').offset().top }, 1000)
    });

    // Scroll to start
    $('.js-scroll-to-start').click(() => {
        $('html, body').animate({ scrollTop: $('.js-section-features').offset().top }, 1000)
    });

    /** Navigations */
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    /** Animations on scroll */

    $('.js-wp-1').waypoint((direction) => {
        $('.js-wp-1').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '70%'
    })

    $('.js-wp-2').waypoint((direction) => {
        $('.js-wp-2').addClass('animate__animated animate__fadeInUp');
    }, {
        offset: '70%'
    })

    $('.js-wp-3').waypoint((direction) => {
        $('.js-wp-3').addClass('animate__animated animate__fadeIn');
    }, {
        offset: '70%'
    })

    $('.js-wp-4').waypoint((direction) => {
        $('.js-wp-4').addClass('animate__animated animate__pulse');
    }, {
        offset: '70%'
    })
});