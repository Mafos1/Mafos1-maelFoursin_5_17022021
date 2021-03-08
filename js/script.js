
//! NAVBAR
document.addEventListener("DOMContentLoaded", function(e) { 
    document.querySelectorAll(".navbar").forEach(navbar => { navbar.style.display = "none" })
    "use strict"
    $(function () {
        window.addEventListener('scroll', function() {
            if ($(this).scrollTop() > 10) { 
                $('.navbar').fadeIn(); 
            } else {
                $('.navbar').fadeOut();
            }
        });
    });
});

//! force navbar to appear if scroll is not possible !! 



