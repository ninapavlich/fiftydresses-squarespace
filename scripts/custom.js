$( document ).ready(function() {
    console.log( "ready!" );
    resizeGridItems();

    $(".needs-ready").addClass("ready");

    /* Listeners */
    $( window ).resize(function() {
        resizeGridItems();
    });
});


/* GRID STUFF */
function resizeGridItems(){
    var grid_item_width = $('.grid').width() / 3;

    $(".grid-item").css("width", grid_item_width);
    $(".grid-item").css("height", grid_item_width);
}