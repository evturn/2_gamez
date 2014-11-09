


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

});



// $(function() {
//     var button = $('#loginButton');
//     var box = $('#loginBox');
//     var form = $('#loginForm');
//     button.removeAttr('href');
//     button.mouseup(function(login) {
//         box.toggle();
//         button.toggleClass('active');
//     });
//     form.mouseup(function() { 
//         return false;
//     });
//     $(this).mouseup(function(login) {
//         if(!($(login.target).parent('#loginButton').length > 0)) {
//             button.removeClass('active');
//             box.hide();
//         }
//     });
// });
