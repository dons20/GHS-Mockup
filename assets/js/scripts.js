$(document).ready(function () {
    var $offCanvas = $("#mobile-menu");
    var $hamburger = $(".hamburger");
    var current = location.pathname;

    //Fade In Body
    $("body").css("display", "none");
    $("body").fadeIn(250);

    //Fade Out on navigation link clicks
    $(".uk-nav a, .uk-navbar a").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(250, redirectPage);
    })

    function redirectPage() {
        window.location = linkLocation;
    }
    
    //Add active class to current link
    var $heroLink = $('#hero-nav a[href="' +current+'"]');
    $heroLink.parent().addClass('uk-active');

    var $activeLink = $('#nav a[href="' +current+ '"]');
    $activeLink.parent().addClass('uk-active');

    //Add active class to parent
    $activeLink.parents("li").addClass('uk-active');

    //Repeat for Mobile menu
    $activeLink = $('#mobile-nav a[href="' +current+ '"]');
    $activeLink.parents("li").addClass('uk-active');

    $offCanvas.on("hide", function(e) {
        $hamburger.removeClass("is-active");
    })
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });
});
