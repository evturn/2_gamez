


$(document).ready(function() {
    $(".sign-up-form").hide();
    $(".log-in-form").hide();

  $(".sign-up").on("mouseenter", function() { 
    $(".log-in-form").hide();
    $(".sign-up-form").slideToggle();
  });


  $(".log-in").on("mouseenter", function() { 
    $(".sign-up-form").hide();
    $(".log-in-form").slideToggle();
  });




  $('.btn').on("click", function(event){
      event.preventDefault();
      $.ajax ({
        url: $('.btn').attr('action'),
        type: $('.btn').attr('method'),
        
        data: {
          letter: $(this).data()['letter'],
        },
        dataType: 'json',
        success: function(response) {
          $(".word").text(response.state)
          if (response.mismatch.length >= 5) {
            alert('You are obviously an idiot. Press OK (if you can read) to play again.')
            location.reload();
      }
        }
      });
    });



    $('.btn').click(function() {
      $(this).fadeToggle("slow", "swing");
      });

    


   $(".hangman").mouseover(function(){
    $(".title-hangman").css("color","yellow");
    
    });
     $(".hangman").mouseleave(function(){
      $(".title-hangman").css("color","white");
    });




  $('.hangman').click(function(){
        var href= $(this).attr('href');
        $('body').fadeOut( 500, function(){
              // go to link when animation completes
              window.location='/hangman';
        });
        // over ride browser following link when clicked
        return false;
  });



});




