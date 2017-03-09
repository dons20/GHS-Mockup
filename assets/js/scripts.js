$(document).ready(function () {
    var $offCanvas = $("#mobile-menu");
    var $hamburger = $(".hamburger");
    var current = location.pathname;

    //Fade In Body
    $("body").css("display", "none");
    $("body").fadeIn(250);

    //Fade Out on navigation link clicks (not # links)
    $(".uk-nav a[href!=\"#\"], .uk-navbar a[href!=\"#\"]").click(function(event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(250, redirectPage);
    });

    $(this).delay(1000).queue(function() {
        UIkit.notification({
            message: [  "<p class=\"uk-text-center\">The GHS Task-Force Needs You!", 
                        "<br /><span class=\"uk-text-meta\">The GHSPSA is an informal group of past students of Glenmuir High School which meets monthly in Kingston and more frequently in the lead-up to any activity. Please feel free to join us.</span><br/></p><button class=\"uk-button uk-button-primary uk-button-small uk-width-1-1\">Join</button>"
                        ],
            status: 'primary',
            pos: 'bottom-right',
            timeout: 10000,
        });
    });

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
