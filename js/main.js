$('.navback').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).parent().find('a').attr('href') ).offset().top
    }, 500);
});

$(function(){
$('.navitem').hover(function(){   
        $(this).find('.navback').animate({"width":'100%'},250);
        },function(){      
         $(this).find('.navback').animate({"width":'0%'},250);
    });
return true;
});


$(function(){
    $('#navbar').hover(function(){
    	var tp = $('body').scrollTop();
    	$('#checkpos').text(tp);	
        $(this).animate({"margin-left":'0px'},500);
    },function(){	   
        $(this).animate({"margin-left":'-10%'},500);
    });
});
