/* Main Js Start */

(function ($) {
  "use strict";

  $(window).on("load", function () {
    $('.preloader').fadeOut();
  })
  $(window).on("load", function () {
    $("#loading").fadeOut();
  })



  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;


  let countDown = new Date('may 30, 2025 00:00:00').getTime();

  function myRacing() {
    let nowDate = new Date().getTime();
    let distance = countDown - nowDate;

    $('#days').text(Math.floor(distance / day));
    $('#hours').text(Math.floor((distance % day) / hour));
    $('#minutes').text(Math.floor((distance % hour) / minute));
    $('#seconds').text(Math.floor((distance % minute) / second));

    // When the countdown is over
    if (distance < 0) {
      clearInterval(MyTimer);
      $('#timeToStart').text('The camp began ☻');
      $('#timeControl').empty();
    }
  }

  let MyTimer = setInterval(myRacing, 100);




  $(document).ready(function () {
    var typed = new Typed(".type", {
      strings: ["Coming Soon"],
      typeSpeed: 70,
      backSpeed: 100,
      loop: true
    });
  });


})(jQuery);



