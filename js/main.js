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

/*
$(function(){
    $('#navbar').h(function(){
        var tp = $('body').scrollTop();
        $('#checkpos').text(tp);    
        $(this).animate({"margin-left":'0px'},500);
    },function(){      
        $(this).animate({"margin-left":'-10%'},500);
    });
});
*/

$(document).ready(function(){
    var count = 0;
    $("#navbar").click(function(){
        count++;
    //even odd click detect 
            var isEven = function(someNumber) {
            return (someNumber % 2 === 0) ? true : false;
            };
    // on odd clicks do this
    if (isEven(count) === false) {
        $("#navbar").animate({"margin-left":'-10%'},500);
    }
    // on even clicks do this
    else if (isEven(count) === true) {
        $("#navbar").animate({"margin-left":'0px'},500);
            }
    });
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