// function appear(target){
//   $(target).show();
// }
// function disappear(target){
//   $(target).hide();
// }

// un click solo senza funzioni
$( '.header-right a' ).click(function() {
 $('.hamburger-menu').show();
});
$( '.close' ).click(function() {
 $('.hamburger-menu').hide();
});


// un click solo con funzioni
// $( '.header-right a' ).click(function() {
//   appear('.hamburger-menu');
// });
// $( '.close' ).click(function() {
//   disappear('.hamburger-menu');
// });

//due click
// $('.header-right a').dblclick(function() {
//   $('.hamburger-menu').fadeIn('fast');
// });
// $('.close').dblclick(function() {
//   $('.hamburger-menu').fadeOut(3000);
// });

//mouseenter e click
// $('.header-right a').mouseenter(function() {
//   $('.hamburger-menu').fadeIn('slow');
// });
// $( '.close' ).click(function() {
//   disappear('.hamburger-menu');
// });

// mouseenter su due elementi per aprire e chiudere (funziona se la x non fosse sopra le barre,ma in questo caso lampeggia)
// $('.header-right a').mouseenter(function() {
//   $('.hamburger-menu').fadeIn(2000);
// });
// $('.close').mouseenter(function() {
//   $('.hamburger-menu').fadeOut(3000);
// });
