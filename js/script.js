
// =========================================================
//             tournament question-part js start
// =========================================================

$('.card').on('click', function () {
    $('.add_border').removeClass('add_border');
    $(this).toggleClass('add_border');
});

// =========================================================
//             tournament question-part js end
// =========================================================

// =========================================================
//             tournament countdown-part js end
// =========================================================

$('#getting-started').countdown('2030/02/01', function(event) {
    $(this).html(event.strftime('%H'));
  });

  $('#getting-started1').countdown('2030/02/01', function(event) {
    $(this).html(event.strftime('%M'));
  });

  $('#getting-started2').countdown('2030/02/01', function(event) {
    $(this).html(event.strftime('%S'));
  });

// =========================================================
//             tournament countdown-part js end
// =========================================================

// =========================================================
//               nice scroll-part js start
// =========================================================

$(".scroll-details").niceScroll({
  cursorwidth:12,
  cursoropacitymin:0.4,
  cursorcolor:'#6e8cb6',
  cursorborder:'none',
  cursorborderradius:4,
  autohidemode:'leave'
}); 


// =========================================================
//                nice scroll-part js end
// =========================================================