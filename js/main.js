//Background transition behind sidenav

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

//menu-button on-click working

document.querySelector( "#nav-toggle" )
  .addEventListener( "click", function(event) {
    event.preventDefault();
    this.classList.toggle( "active" );

    var tp = $("#nav-toggle").hasClass('active') ;
     

    if( tp === true)
    {
        $("#navbar").animate({"margin-left":'0px'},500);
    }

    else if(tp === false)
    {
        var wid= $('#navbar').width();
        wid = (-wid) + 'px';
        $("#navbar").animate({"margin-left":wid},500);
    }

  });

//notifications on-click working

document.querySelector( "#notify-toggle" )
  .addEventListener( "click", function(event) {
    event.preventDefault();
    this.classList.toggle( "active" );

    var tp = $("#notify-toggle").hasClass('active') ;
     

    if( tp === true)
    {
        $("#notify-bar").animate({"margin-right":'0px'},500);
    }

    else if(tp === false)
    {
        var wid= $('#notify-bar').width();
        wid = (-wid) + 'px';
        $("#notify-bar").animate({"margin-right":wid},500);
    }

  }); 

$("#click").click(function() {
  $("#cover").removeClass('hidden');
  $("#message").removeClass('hidden');
  $(this).addClass('hidden');
});
$("#x, #cover").click(function() {
  $("#cover").addClass('hidden');
  $("#message").addClass('hidden');
  $("#click").removeClass('hidden');
});

//menu hiding function on scroll

var flagscroll = 0;
$(document).ready(function(){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        
         var  ht = $('body').height();
         ht = parseInt(ht * 0.38) + 5;

         $('#checkpos').text(ht);
        if ($(this).scrollTop() > ht) {
            if(flagscroll==0)
            {
                var wid= $('#navbar').width();
                wid = (-wid) + 'px';
                flagscroll = 1;
                $("#navbar").animate({"margin-left":wid},300);
                $("#notify-bar").animate({"margin-right":wid},300);
                $('#nav-toggle').removeAttr('class');
                $('#notify-toggle').removeAttr('class');
                $('#mainnav').animate({'width':'100%'},700);
                $('#notify-btn').css('border-left',' 1px solid  rgba(255,255,255,0.5)');
                $('#login').css('border-bottom-right-radius','0px');
                $('#mainnav').css('border-bottom-right-radius','0px');
                $('#logo').css({'position':'fixed','top':'5px'});
                $('#logo').animate({'height':'70px'},500,"linear");

            }    
        } 

        else {
            if(flagscroll==1)
            {

                flagscroll=0;
                $("#navbar").animate({"margin-left":'0px'},300);
                $("#notify-bar").animate({"margin-right":'0px'},300);
                $('#nav-toggle').attr('class', 'active');
                $('#notify-toggle').attr('class', 'active');
                $('#mainnav').animate({'width':'195px'},700);
                $('#notify-btn').css('border-left',' 0px solid  rgba(255,255,255,0.5)');
                $('#login').css('border-bottom-right-radius','5px');
                $('#mainnav').css('border-bottom-right-radius','5px');
                $('#logo').css({'position':'absolute','top':'38vh'});
                $('#logo').animate({'height':'22vh'},500,"linear");
            }
        }
    });   
});

$('#login,#menubutton,#notify-btn').hover(function(){
    $(this).css('background','rgba(139,141,182,0.7)');
},function(){
     $(this).css('background','transparent');
});