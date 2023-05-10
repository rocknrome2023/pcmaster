
// menu click

$(document).ready(function() {
    $(".humbericon").on("click", function() {
        $(this).toggleClass("openmenu");
        $("body").toggleClass("openmenu");
    });
});



// banner slider

$('.sliderSection .owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})