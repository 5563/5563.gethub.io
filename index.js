// @import "./lwb/sassmixins/mixins.sass"
$(function() {
 handleProgress();
 bottom_menu();
  setInterval(function() {
    $(".notice_text").animate(
      {
        marginTop: "-30px"
      },
      500,
      function() {
        $(this)
          .css({ marginTop: "0" })
          .find(":first")
          .appendTo(this);
      }
    );
  }, 2000);

  var sec = 60;
  var minute = 59;
  var hour = 23;
  var day = 6;
  $("#second").text(sec);
  $("#minute").text(minute);
  $("#hour").text(hour);
  $("#day").text(day);
  setInterval(function() {
    $("#second").text(--sec);
    if (sec == 0) {
      $("#minute").text(--minute);
      sec = 60;
      if (minute == 0) {
        hour = 60;
        $("#hour").text(--hour);
        if (hour == 0) {
          $("#day").text(--day);
        }
      }
    }
  }, 1000);
  var mySwiper = new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination"
    }
  });
  
});
function handleProgress(){
  let h = document.getElementsByTagName("html");
  let dpr = h[0].getAttribute("data-dpr");
  $(".progress_left:eq(0)").css("width", ($(".progress").width() * 0.5) / dpr);
  $(".like_time:eq(1)").css("visibility","hidden");
  $(".progress_left:eq(2)").css("width", ($(".progress").width() * 0.7) / dpr);
  $(".progress_right:eq(0)").text("50%");
  $(".progress_right:eq(2)").text("75%");
}

function bottom_menu(){
//  $(".footer_menu_one").click(function(){
//     $(".footer_menu_title").each(function(){
//       $(this).css("color","red");
//     })
//     // alert("13");
//   })
    var btn = document.getElementsByClassName("footer_menu_one");
    var btntext = document.getElementsByClassName("footer_menu_title");
    for(var i = 0;i<btn.length;i++) {
      !function(num){
        
        btn[num].onclick = function(){
          for(var j = 0;j<btn.length;j++) {
            btn[j].style.color = "rgba(153,153,153,1)";
            btntext[j].style.color = "#000";
          }
          btn[num].style.color = "#FF5400";
          btntext[num].style.color = "#FF5400";
        }
      }(i);
      
    }
}