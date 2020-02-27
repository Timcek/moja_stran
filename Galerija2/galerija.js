


var a = $(".stranski").width();
$(".stranski").css("height",(a+a*0.3)+"px");

var b = $(".notranji_ena").width();
$(".notranji_ena").css("height",(b)+"px")

$(window).resize(function(){
  var a = $(".stranski").width();
  $(".stranski").css("height",(a+a*0.3)+"px");

  var b = $(".notranji_ena").width();
  $(".notranji_ena").css("height",(b)+"px")

})
