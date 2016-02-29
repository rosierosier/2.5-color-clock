var isHovering = false;

function displayTime() {
  'use strict';

  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  console.log(currentTime);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }  // add zero in front of numbers < 10
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;

    var color = document.querySelector('#clock');
  if(isHovering){
    color.textContent = hours.toString(16) + ":" + minutes.toString(16) + ":" + seconds.toString(16);
  }

  var hexHours = hours.toString(16);
  var hexMinutes = minutes.toString(16);
  var hexSeconds = seconds.toString(16);
  // console.log(hexHours, hexMinutes, hexSeconds);
  var backgroundColorChange = '#' + hours.toString(16) + minutes.toString(16) + seconds.toString(16);
  // if (hexHours > 10 && hexHours < 16) {
  //   hexHours = "0" + hexHours;
  // }
  // if (hexMinutes > 10 && hexMinutes < 16) {
  //   hexMinutes = "0" + hexMinutes;
  // }
  // if (hexSeconds >10 && hexSeconds < 16) {
  //   hexSeconds = "0" + hexSeconds;
  // }
  // console.log(hexSeconds);
  console.log(backgroundColorChange);

  function changeColor() {
    var background = document.querySelector('#clock');
    background.style.backgroundColor = backgroundColorChange;
  }
  changeColor();
  setInterval(changeColor, 1000);

}

var clockCol = document.querySelector('#clock');
clockCol.addEventListener('mouseenter', trackMouseOn);
clockCol.addEventListener('mouseleave', trackMouseOff);

displayTime();
setInterval(displayTime, 1000);


function trackMouseOn() {
  // console.log('backgroundColor');
  isHovering = true;
  // var background = document.querySelector('#clock');
  // background.style.backgroundColor = 'pink';
}

function trackMouseOff() {
  // console.log('mouseleave');
  isHovering = false;
  // var background = document.querySelector('#clock');
  // background.style.backgroundColor = 'grey';

}
