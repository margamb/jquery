$(document).ready(() => {
    
    $(".hide-button").on("click", () => {
        $(".ingrid").hide();
    });

    $(".show-button").on("click", () => {
        $(".ingrid").show();
    });

    $(".toggle-button").on("click", () => {
        $(".ingrid").toggle();
    });


    $(".fade-out-button").on("click", () => {
        $(".ingrid1").fadeOut(500);
    });

    $(".fade-in-button").on("click", () => {
        $(".ingrid1").fadeIn(4000);
    });

    $(".fade-toggle-button").on("click", () => {
        $(".ingrid1").fadeToggle();
    });


    $(".up-button").on("click", () => {
        $(".ingrid2").slideUp(100);
    });

    $(".down-button").on("click", () => {
        $(".ingrid2").slideDown("slow");
    });

    $(".slide-toggle-button").on("click", () => {
        $(".ingrid2").slideToggle(400);
    });

});