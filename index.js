
$(function(){
  setInterval(function(){
    $(".notice_text").animate({
      marginTop: "-35px"
  }, 500, function () {
      $(this).css({marginTop:"0"}).find(":first").appendTo(this);
      
  })
  },2000);

  var sec = 60;
  var minute = 59;
  var hour = 23;
  var day = 6;
  $("#second").text(sec);
  $("#minute").text(minute)
  $("#hour").text(hour)
  $("#day").text(day)
  setInterval(function(){
   $("#second").text(--sec);
   if(sec == 0){
    $("#minute").text(--minute)
    sec = 60;
    if(minute == 0) {
      hour = 60;
      $("#hour").text(--hour)
      if(hour == 0) {
        $("#day").text(--day)
      }
    }
   }
  },1000)
  var mySwiper = new Swiper('.swiper-container',{
    pagination: {
      el: '.swiper-pagination',
    },
  })
})

