
////////////////////////////////////////
// Add listener to affix navbar to top
////////////////////////////////////////
$(document.body).scroll(function(){
  var navbarTop = $('#main-nav').position().top;
    if (navbarTop <= 0 && !$('#main-nav').hasClass('top')) {
      // console.log('top');

      // affixes to top by setting "position: fixed"
      $('#main-nav').addClass('top');

      // pushes the first section down
      var newPosition = $('#main-nav').height();
      $('.top-wrapper').css('margin-top', newPosition);
      // $('#box-wrapper').css('margin-top', newPosition);

      // // remove listener once the top is reached;
      // $(document.body).unbind('scroll');
    }
});

// $(window).scroll(function () {
// console.log('hi')
// });
