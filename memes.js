$(document).ready(function() {
  
    
//Take a user-supplied URL and change the img's src attribute to that URL when the "change picture" button is pressed. To make better...find a way to allow uploadable files from user's computer?
$("#pic-btn").click(function(event) {
    event.preventDefault();
    var storeURL = $(".url-entry-input").val();
    $('#meme-pic').attr("src", storeURL);  
});
    
    
//Change the text of the upper caption
$("#top-caption-input").keyup(function() {   
    var userInputTop=$(this).val();
    $("#top-caption").text(userInputTop);
});

//Change the text of the lower caption
$("#bottom-caption-input").keyup(function() {   
    var userInputBottom=$(this).val();
    $("#bottom-caption").text(userInputBottom);
});

/*jQuery API: the .text() method CANNOT be used to get the inner text of a form element. For that, we had to use the .val() method (as above). This tripped me up for a long time until I went to the .text() page on the documentation.*/
    

    
//Ways to improve: If the text is white by default, can the user click a button that will change the text to red, or to black, or to other options?
    
    $("#red").click(function() {
       $(".captions").css("color", "red"); 
    });
    
    $("#green").click(function() {
       $(".captions").css("color", "green"); 
    });
    
    $("#black").click(function() {
       $(".captions").css("color", "black"); 
    });
    $("#white").click(function() {
       $(".captions").css("color", "white"); 
    });
    
    $("#orange").click(function() {
       $(".captions").css("color", "orange"); 
    });
    
    $("#blue").click(function() {
       $(".captions").css("color", "blue"); 
    });
    $("#yellow").click(function() {
       $(".captions").css("color", "yellow"); 
    });  
    
//Ok, now a way to make it DRY?

    
}); //end document ready