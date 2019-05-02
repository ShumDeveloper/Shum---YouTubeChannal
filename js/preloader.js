$(document).ready(function($) {
    var Body = $('body');
    Body.addClass('preloader-site');
	
});
$(window).onload(function() {
	
    $('.preloader-wrapper').fadeOut();
    $('body').removeClass('preloader-site');
});
<script>
$(window).load(function() {
  $('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
});
</script>
