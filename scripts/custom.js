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


    var layout_size = (grid_width > medium_breakpoint) ? "large" : (grid_width <= medium_breakpoint && grid_width > small_breakpoint)? "medium" : "small";
    var grid_item_width = (grid_width > medium_breakpoint) ? grid_width / 3 : (grid_width <= medium_breakpoint && grid_width > small_breakpoint)? grid_width / 2 : grid_width;
    
    $(".grid-item").css("width", grid_item_width);
    $(".grid-item").css("height", grid_item_width);

    $(".inner-grid-item").css("width", grid_item_width);
    $(".inner-grid-item").css("height", grid_item_width);



    if(layout_size=="large"){
        $(".grid-item.triple").css("height", 3*grid_item_width);
        $(".grid-item.triple").css("width", grid_item_width);

        $(".grid-item.double").css("height", 2*grid_item_width);
        $(".grid-item.double").css("width", grid_item_width);

        $(".grid-item.double-wide").css("height", grid_item_width);
        $(".grid-item.double-wide").css("width", 2*grid_item_width);

        $(".grid-item.triple-wide").css("height", grid_item_width);
        $(".grid-item.triple-wide").css("width", 3*grid_item_width);

    }else if(layout_size=="medium"){

        $(".grid-item.double").css("height", grid_item_width);
        $(".grid-item.double").css("width", 2*grid_item_width);

        $(".grid-item.double-wide").css("height", grid_item_width);
        $(".grid-item.double-wide").css("width", grid_item_width);

        $(".grid-item.triple").css("height", grid_item_width);
        $(".grid-item.triple").css("width", 3*grid_item_width);

    }else{
        $(".grid-item.double").css("height", 2*grid_item_width);
        $(".grid-item.double").css("width", grid_item_width);

        $(".grid-item.double-wide").css("height", grid_item_width);
        $(".grid-item.double-wide").css("width", grid_item_width);

        $(".grid-item.triple").css("height", 3*grid_item_width);
        $(".grid-item.triple").css("width", grid_item_width);
    }

    
    
}