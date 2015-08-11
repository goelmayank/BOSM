// Circular nav

(function(){

	var button = document.getElementById('cn-button'),
	point = document.getElementById('pointer'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler , false);
	point.addEventListener('click', handler , false);

	function handler(){
	  if(!open){
	  	$("#overlay").fadeIn(200);
	  	$('#pointer').css("display","none");
	  	$('div.component').animate({"top":"70vh"},200);
	  	setTimeout(function() {

	    	classie.add(wrapper, 'opened-nav');

	  	}, 100);
	    
	  }
	  else{
	  	$("#overlay").fadeOut(300);
		classie.remove(wrapper, 'opened-nav');
		var pos = $('#landing').height() - 35;
		setTimeout(function() {
			$('div.component').animate({"top": pos  },200);	
	  	}, 300);
	  	$('#pointer').css("display","block");
	  }
	  open = !open;
	}

	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}

	$('.cn-wrapper a').click(function(){
    $('html,body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    handler();
	});

	$('#overlay').click(function(){
		handler();
	});
	
})();

//pointer

tofropointer();

 function tofropointer(){
 	$('#pointer').animate({'bottom':'4.35em'},200).delay(200).animate({'bottom':'4em'},200);
	setTimeout(function() {tofropointer();}, 400);	
 }

 

 //scroll

 //flicker

 function flicker(){
 	$('.fl_right').pulse({opacity: 0.6}, {duration : 180, pulses : 7});
 	$('.fl_left').pulse({opacity: 0.6}, {duration : 130, pulses : 10});
 	$('#classylogo').pulse({opacity: 0.6}, {duration : 200, pulses : 7});
 	fade();
 }

function fade(){
	$('.fl_right').fadeIn(100,1);
 	$('.fl_left').fadeIn(100,1);
}

//loader
function loader(){
	 		 $('#loader').css({"display":"none"});
	 		 $('html,body').css({ 'overflow': 'visible'});
	 		 if( $('body').width() > 550)
				{
	 		  $('.fl_left , .fl_right').fadeTo(350,0.6,flicker());
	 		    }
	 		 var phwid = $('.photo-wrapper').width();
	 		$('.photo-wrapper').css('height',phwid);
	 	}

//gallery
$(function () {
    $('.photo-thumb').glisse({speed: 500, changeSpeed: 550, effect:'fade', fullscreen: false}); 
});

//notifications
(function() {

	$('#live-chat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(300);

	});

}) ();