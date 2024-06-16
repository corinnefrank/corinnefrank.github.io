$(document).ready(function(){
    $('.logo-white-bkgd').hover(function() {
        $(this).find('.text-wrapper-22').css('color','#000000');
        $(this).find('.text-wrapper-23').css('color','#80CEE7');
      },function(){
          $(this).find('.text-wrapper-22').css('color','#E273BB');
          $(this).find('.text-wrapper-23').css('color','#D7FF5E ');
      });

      $('.navigation-link').hover(function(){
        $(this).css('font-weight','bold');
      },function(){
        $(this).css('font-weight','normal');
      });

      $('.text-wrapper-27, .text-wrapper-28').hover(function(){
        $(this).css('font-size', '75px');
      },function(){
        $(this).css('font-size', '71.4px');
      });
});