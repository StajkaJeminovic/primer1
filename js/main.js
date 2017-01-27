$(function(){
	
$('#pull').click(function(){
  if(!$('#nav').hasClass('vidi')){
  $('#nav').slideDown().addClass('vidi');
} else {
  $('#nav').removeClass('vidi').slideUp();
}
});






	$('#prva').css({'height':'100px'});
	$('#navigation').hide().slideDown();
	$('#capption>h1').addClass('animated bounceInDown');
	$('#capption>p').addClass('animated bounceInLeft');
	$('#capption>button').addClass('animated bounceInUp');
	var $h2P=$('#service>h2, #service>p');
	 $h2P.css('opacity', 0);
 
  $('#service>h2, #service>p').waypoint(function() {
      $('#service>h2, #service>p').addClass('animated fadeIn');
  }, { offset: '50%' });
 


 $('.col-xs-41').eq(0).css('opacity', 0);
 
  $('.col-xs-41').eq(0).waypoint(function() {
      $('.col-xs-41').eq(0).addClass('animated fadeInUpBig');
  }, { offset: '70%' });


 $('.col-xs-41').eq(1).css('opacity', 0);
 
  $('.col-xs-41').eq(1).waypoint(function() {setTimeout(function(){
      $('.col-xs-41').eq(1).addClass('animated fadeInUpBig');
  },$(this).data('delay'));
  }, { offset: '70%' });


   $('.col-xs-41').eq(2).css('opacity', 0);
 
  $('.col-xs-41').eq(2).waypoint(function() {
  	setTimeout(function(){
      $('.col-xs-41').eq(2).addClass('animated fadeInUpBig');},$(this).data('delay'));
  }, { offset: '70%' });

  $('#sivo').css('opacity', 0);
 
  $('#sivo').waypoint(function() {
      $('#sivo').addClass('animated fadeInLeft');
  }, { offset: '50%' });


  $('#treca>section').css('opacity', 0);
 
  $('#treca>section').waypoint(function() {
      $('#treca>section').addClass('animated fadeInRight');
  }, { offset: '50%' });

  $('aside').css('opacity', 0);
   
    $('aside').waypoint(function() {
        $('aside').addClass('animated fadeInRight');
    }, { offset: '25%' });

    $('#sedma>div:first-child').css('opacity', 0);
     
      $('#sedma>div:first-child').waypoint(function() {
          $('#sedma>div:first-child').addClass('animated bounceIn');
      }, { offset: '50%' });





      $('#cetvrta ul li').css('opacity', 0);
       
        $('#cetvrta ul li').waypoint(function() {
            $('#cetvrta ul li').addClass('animated fadeInUp');
        }, { offset: '40%' });



//peta


$('#naslov2').css('opacity', 0);
 
  $('#naslov2').waypoint(function() {
      $('#naslov2').addClass('animated lightSpeedIn');
  }, { offset: '30%' });

 $('#peta .col-xs-41').eq(0).css('opacity', 0);
 
  $('#peta .col-xs-41').eq(0).waypoint(function() {
      $('#peta .col-xs-41').eq(0).addClass('animated fadeInUpBig');
  }, { offset: '50%' });


 $('#peta .col-xs-41').eq(1).css('opacity', 0);
 
  $('#peta .col-xs-41').eq(1).waypoint(function() {setTimeout(function(){
      $('#peta .col-xs-41').eq(1).addClass('animated fadeInUpBig');
  },$(this).data('delay'));
  }, { offset: '50%' });


   $('#peta .col-xs-41').eq(2).css('opacity', 0);
 
  $('#peta .col-xs-41').eq(2).waypoint(function() {
  	setTimeout(function(){
      $('#peta .col-xs-41').eq(2).addClass('animated fadeInUpBig');},$(this).data('delay'));
  }, { offset: '50%' });

//sesta

var $client1=$('.client').eq(0);
var $client2=$('.client').eq(1);

	$client1.css ('opacity',0);
	$client2.css ('opacity',0);
	$client1.waypoint(function(){
		setTimeout(function(){
			$client1.addClass('animated fadeInRight')},$(this).data('delay'));}
		,{ offset: '50%' });
	$client2.waypoint(function(){
		setTimeout(function(){
			$client2.addClass('animated fadeInLeft')},$(this).data('delay'));}
		,{ offset: '50%' });
		
		
	


});


	
$(function() {
      $('#pull').click(function(){
        if(!$('#nav').is(":visible")){
          $('#nav').css({'display':'block'});

        } else{
          $('#nav').css({'display':'none'});
        }
       });
      });

     
        
       
        
       
    

   



     