$(document).ready(function(){
	$('#myTab a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

  $(document).ready(function() {
    $('#myCarousel').carousel({
      interval: 5000
    })
  });
});



