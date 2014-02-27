

window.onload=function hoveranimate(){
$('#logos').hover(function() {
    $('#logos').not($(this)).stop().animate({
        opacity: .3
    }, 500);
}, function() {
    $('#logos').stop().animate({
        opacity: 1
    });
}, 250);
}
