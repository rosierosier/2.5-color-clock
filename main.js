function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  console.log(currentTime);
  setInterval(displayTime, 1000);
  }

  var colorClock = document.getElementById('clock');
  colorClock.innerText = 'hours' + ":" + 'minutes' + ":" + 'seconds';

  displayTime();


function digits(time) {
    if (time < 10) {time = "0" + time};  // add zero in front of numbers < 10
    return time;
}(


setInterval(displayTime, 1000));


/*var everySecond = setInterval(function(){
  document.querySelector('body').backgroundColor = function();
});*/
