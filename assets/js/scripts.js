$(document).ready(function () {
    var $offCanvas = $("#mobile-menu");
    var $hamburger = $(".hamburger");
    var current = location.pathname;
    console.log(current);

    //Add active class to current link
    var $activeLink = $('#hero-nav a[href="' +current+'"]');
    $activeLink.parent().addClass('uk-active');

    $activeLink = $('#nav a[href="' +current+ '"]');
    $activeLink.parent().addClass('uk-active');

    //Add active class to parent
    $activeLink.parents("li").addClass('uk-active');

    $offCanvas.on("hide", function(e) {
        $hamburger.toggleClass("is-active");
    })
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
    });
});
