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


  // console.log(hexHours);
  if (hexHours.length == 1) {
    hexHours = hexHours + hexHours;
    console.log(hexHours);
  }
  if (hexMinutes.length == 1){
    hexMinutes = hexMinutes + hexMinutes;
    console.log(hexMinutes);
  }
  if (hexSeconds.length == 1){
    hexSeconds = hexSeconds + hexSeconds;
    console.log(hexSeconds);
  }

  // if (hexHours > 10 && hexHours < 16) {
  //     hexHours = hours.toString(16) + hours.toString(16);
  //     console.log("hours less than 10 and greater than 16");
  //   }
  //   if (hexMinutes > 10 && hexMinutes < 16) {
  //     hexMinutes = minutes.toString(16) + minutes.toString(16);
  //     console.log("minutes less than 10 and greater than 16");
  //   }
  //   if (hexSeconds > 10 && hexSeconds < 16) {
  //     hexSeconds = seconds.toString(16) + seconds.toString(16);
  //     console.log("seconds less than 10 and greater than 16");
  //   }

    console.log(hexHours, hexMinutes, hexSeconds);
  var backgroundColorChange = "#" + hexHours + hexMinutes + hexSeconds;

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
