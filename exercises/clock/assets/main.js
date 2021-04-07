$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  var $milliseconds = $('#milliseconds')
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    // var w = window.innerWidth - 100;
    var w = window.innerWidth - 100;

    $clockText.css(h + ":" + m + ":" + s + ":" + ms);
    // $hour.css('transform', 'translateX(' + (w / 24) + h + 'px)';
    // $minute.css('transform', 'translateX('+ (w / 60) + m +'px)';
    // $second.css('transform', 'translateX(' + (w / 60) + s) + 'px)';
    // $millisecond.css('transform', 'translateX(' + (w / 100) + ms) + 'px)';

    hour.style.transform = "translateX(" + ((w / 24) + h * (w/24)) + "px)";
    minute.style.transform = "translateX(" + ((w / 60) + m * (w/60)) + "px)";
    second.style.transform = "translateX(" + ((w / 60) + s * (w/60)) + "px)";
    millisecond.style.transform = "translateX(" + ((w / 100) + ms - (w/100)) + "px)";

    setTimeout(updateClock, clockUpdateSpeed);
  }
  updateClock();
});