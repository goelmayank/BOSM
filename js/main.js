//ball to fro
function balltf()
{
	//$('#cn-button').animate({'margin-top':'-2.7em'},200).animate({'margin-top':'-2.25em'},200);
}




function smd()
{
	if($(window).scrollTop() > 100)
	{
		$("#menutxt").css("display","none");
		$('#pointer').removeClass("flipv");
	}
	else
	{
		$("#menutxt").css("display","block");
		$('#pointer').addClass("flipv");
	}
}

 



// Circular nav
(function(){

	var button = document.getElementById('cn-button'),
	point = document.getElementById('pointer'),
    wrapper = document.getElementById('cn-wrapper');
   
    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler , false);
	point.addEventListener('click', handler , false);
	var balltofro  = setInterval(function(){ balltf();}, 450);	
	function handler(){
	  if(!open){
	  	$("#overlay").fadeIn(200);
	  	$('#pointer').css("display","none");
	  	$('div.component').animate({"top":"70vh"},200);
	  	$("#menutxt").css("display","none");
	  	$('#pointer').removeClass("flipv");
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

	$('.cn-wrapper a').click(function(e){
		e.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $(this).attr('href') ).offset().top
	    }, 1000);
	    handler();
	});

	$('#overlay').click(function(){
		handler();
	});
	$('#cn-button').one( "click", function() {
		clearInterval(balltofro);
		$('#cn-button').stop(true,true);
	});
})();

//pointer

tofropointer();

 function tofropointer(){
 	$('#pointer').animate({'bottom':'4.35em'},200).delay(50).animate({'bottom':'4em'},200);
	setTimeout(function() {tofropointer();}, 450);	
 }


 //resize function
function galres()
{
	var phwid = $('.photo-wrapper').width();
	 		$('.photo-wrapper').css('height',phwid);
}

function fade(){
	$('.fl_right').fadeIn(100,1);
 	$('.fl_left').fadeIn(100,1);
}

 //flicker

 function flicker(){
 	$('.fl_right').pulse({opacity: 0.6}, {duration : 180, pulses : 7});
 	$('.fl_left').pulse({opacity: 0.6}, {duration : 130, pulses : 10});
 	//$('#classylogo').pulse({opacity: 0.6}, {duration : 200, pulses : 7});
 	fade();
 }



//loader
function loader(){
	 		 $('#loader').css({"display":"none"});
	 		 $('html,body').css({ 'overflow': 'visible'});
	 		 if( $('body').width() > 550)
				{
	 		  $('.fl_left , .fl_right').fadeTo(350,0.6,flicker());
	 		    }
	 		 galres();
	 	}

//gallery
$(function () {
    $('.photo-thumb').glisse({speed: 500, changeSpeed: 550, effect:'fade', fullscreen: false}); 
});



//gallery resize
$(window).resize(function(){
	galres();
	var bh = $(".boxes").height();
 	$(".boxes").find("div").css({"line-height" : bh + "px"});

});

// notifications
$(function() {
  $(".notifications").hide();
  $(".footer_notif").click(function() {
    if ($(".messages").children().length > 0) {
      $(".notifications").fadeToggle(300);
    }
  });
});

$('#tpt').click(function()
{
	$('html, body').animate({scrollTop:$('#landing').offset().top},500);
});

$('#classylogo').mouseenter(function(){
    $('#classylogocol').fadeIn(300); 
});

$('#classylogocol').mouseleave(function(){
    $('#classylogocol').fadeOut(300);
});