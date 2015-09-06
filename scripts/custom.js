var medium_breakpoint = 700;
var small_breakpoint = 500;

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
    var grid_width = $('.grid').width();

    if(grid_width > medium_breakpoint){
        var grid_item_width = grid_width / 3;
    }else if(grid_width <= medium_breakpoint && grid_width > small_breakpoint){
        var grid_item_width = grid_width / 2;
    }else{
        var grid_item_width = grid_width;
    }

    $(".grid-item").css("width", grid_item_width);
    $(".grid-item").css("height", grid_item_width);

    $(".inner-grid-item").css("width", grid_item_width);
    $(".inner-grid-item").css("height", grid_item_width);

    $(".grid-item.double").css("height", 2*grid_item_width);
    
}