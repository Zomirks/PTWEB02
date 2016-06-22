$(window).scroll(function (event) {
    // A chaque fois que l'utilisateur va scroller (descendre la page)
    var y = $(this).scrollTop(); // On récupérer la valeur du scroll vertical

    var h = window.innerHeight; //  On récupère la hauteur de l'écran
    
    //si cette valeur > à 200 on ajouter la class
    if (y >= h) {
      $('.nav').addClass('fixed');
    } else {
      // sinon, on l'enlève
      $('.nav').removeClass('fixed');
    }
  });


$(window).scroll(function (event) {    
    if ($('#navmenu').hasClass('fixed')) {
        $('#navbot').addClass('main');
    } else {
        $('#navbot').removeClass('main'); }
});

$(window).scroll(function (event) {    
    if ($('#navmenu').hasClass('fixed')) {
        $('#logoMenu').addClass('logoMenuFixed');
    } else {
        $('#logoMenu').removeClass('logoMenuFixed'); }
});