//$.action() method is deprecated as of jQuery 1.8 and removed in jQuery 1.9.

//$.(selector).action() was used to bind or trigger custom actions on selected elements.
   $(".box").css({"background-color": "PURPLE"});

    $(".para-box .para-one").text("this is my new para");

    $("#btn").on("click", function(){
        alert("Button clicked");
    });