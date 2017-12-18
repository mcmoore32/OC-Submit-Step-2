function toggleCard() {
  $('.new-record').click(function(){
    $('#collapseOne').removeClass('show');
    $('#collapseTwo').removeClass('show');
    $('.card3').toggle();
    $('#collapseThree').addClass('show');
  });
};

$( document ).ready(function() {
  $('.card3').hide();
  toggleCard();
});
