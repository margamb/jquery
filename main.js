$(document).ready(() => {

    $('.poster-details').hide();

    $(".more-details-button").on('click', event => {
        $(".poster-details").toggle(200)
    });
    
    /*$(".more-details-button").on("click", event => {
        $(event.target).toggle(".active")
    })*/

    $('.more-details-button').on('click', event => {
        $(event.currentTarget).toggleClass('active');
    });

    

    $('.poster-details li').on('click', event => {
        $(event.currentTarget).addClass('active-size');
        
        $(event.currentTarget).siblings().removeClass('active-size')
        
        $(event.currentTarget).closest('.poster-details').children().removeClass('disabled')
        
        
      });
    
    

    //////////////////////////////////////////////////
    
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
        $(".christopherLee").fadeOut(500);
    });

    $(".fade-in-button").on("click", () => {
        $(".christopherLee").fadeIn(4000);
    });

    $(".fade-toggle-button").on("click", () => {
        $(".christopherLee").fadeToggle();
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