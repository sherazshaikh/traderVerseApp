// Custom JS 
$(document).ready(function () {
    // For SearchBar ShowHide OnMobile
    $(".searchButton").click(function () {
        $(".search-box-onMobile").toggleClass("open-search");
    });

    // For Left Menu Drawer ShowHide OnMobile
    $(".menuButton").click(function () {
        $(".left-sidebar").toggleClass("open-menu");
        $(".menu").toggleClass("opened");

    });

    // For Tabs
    $(activate);

});

$('.spotlight-carousel').owlCarousel({
    nav: false,
    dots: false,
    navText: ["<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>"],
    responsive: {
        0: {
            items: 1
        },
        1300: {
            items: 3
        },
    }
});
$('.influencer-carousel').owlCarousel({
    nav: false,
    dots: false,
    navText: ["<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>"],
    responsive: {
        0: {
            items: 3
        },
        1000: {
            items: 5
        },
        1450: {
            items: 6
        },
        1700: {
            items: 7
        },
        2200: {
            items: 8
        },
        2500: {
            items: 9
        }
    }
});
$('.video-carousel').owlCarousel({
    nav: false,
    dots: false,
    navText: ["<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>"],
    responsive: {
        0: {
            items: 2
        },
        1450: {
            items: 3
        },
        1700: {
            items: 4
        },
        2200: {
            items: 6
        },
    }
});

$('.influencer-carousel2').owlCarousel({
    nav: false,
    dots: false,
    navText: ["<div class='nav-button owl-prev'><i class='fas fa-chevron-left'></i></div>", "<div class='nav-button owl-next'><i class='fas fa-chevron-right'></i></div>"],
    responsive: {
        0: {
            items: 3
        },
        1000: {
            items: 5
        },
        1450: {
            items: 9
        },
        1700: {
            items: 10
        },
        2200: {
            items: 11
        },
        2500: {
            items: 12
        }
    }
});
function activate() {

    $('#MainExploreTabs')
        .scrollingTabs()
        .on('ready.scrtabs', function () {
            $('.tab-content').show();
        });

    $('#InnerTabs')
        .scrollingTabs()
        .on('ready.scrtabs', function () {
            $('.tab-content').show();
        });

}


$(".video-frame").fitVids();