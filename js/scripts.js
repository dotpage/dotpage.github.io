window.onload = function () {
    var nav = $('.nav-block');
    var menu = $('.menu');
    var modal = $('.modal');
    var links = $('.nav-list__link');
    var moveDown = $('.img-double-down');

    menu.on('click', function () {
        if (nav.hasClass("visible")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    modal.on('click', function () {
        if (modal.hasClass("visible")) {
            closeMenu();
        }
    });

    links.on('click', function (e) {
        e.preventDefault();
        // $('.nav-list__link').removeClass('active').filter(this).addClass('active');
        var $id = $(this).attr('href');
        var offSet = $($id).offset().top;
        moveScroll(offSet);
    });

    moveDown.on('click', function (e) {
        e.preventDefault();
        var offSet = $('#portfolio').offset().top;
        moveScroll(offSet);
    });

    $(".owl-carousel").owlCarousel({
        items: 1,
        merge: true,
        loop: true,
    });

    function openMenu(params) {
        nav.addClass("visible").animate({
            left: 0,
        }, 200);
        modal.addClass("visible").animate({
            opacity: 1
        }, 200, function () {
            $(".body").addClass("hidden");
        });
    }

    function closeMenu() {
        modal.removeClass("visible").animate({
            opacity: 0
        }, 200, function () {
            $(".body").removeClass("hidden");
        });
        nav.removeClass("visible").animate({
            left: "-261px"
        }, 200);
    }

    function moveScroll(top) {
        var value = top || 0;
        var coord = $('html, body');
        coord.animate({
            scrollTop: value
        }, 400);
    }

};