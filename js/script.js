
//! NAVBAR
$().ready(function (){
    $(".navbar").hide();
    "use strict"
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 10) { 
                $('.navbar').fadeIn(); 
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});



