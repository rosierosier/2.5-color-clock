var isHovering = false;



function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  console.log(currentTime);
  // console.log(seconds);


  if (seconds < 10) {
    seconds = "0" + seconds;
  }  // add zero in front of numbers < 10

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (isHovering) {
    console.log('hovering');
  }


    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;
    var color = document.querySelector('#clock');



  if(isHovering){
    color.textContent = hours.toString(16) + ":" + minutes.toString(16) + ":" + seconds.toString(16);
  }



  // console.log(hours.toString(16));

  // var hexhour = hours.toString(16);
  // var hexminutes = minutes.toString(16);
  // var hexseconds = seconds.toString(16);



}


var clockCol = document.querySelector('#clock');
clockCol.addEventListener('mouseenter', trackMouseOn);
clockCol.addEventListener('mouseleave', trackMouseOff);

// function hexColor(hours, hexminutes, hexseconds) {
//   console.log(hexhour);
//   var color = document.querySelector('#clock');
//   console.log(hours.toString(16));
//   color.textContent = hexhour + ":" + hexminutes + ":" + hexseconds;


// }









//color.addEventListener('hover', hexColor);


displayTime();
setInterval(displayTime, 1000);



function trackMouseOn() {
  console.log('mouseon');
  isHovering = true;
}


function trackMouseOff() {
  console.log('mouseleave');
  isHovering = false;
}








/*var everySecond = setInterval(function(){
  document.querySelector('body').backgroundColor = function();
});*/
