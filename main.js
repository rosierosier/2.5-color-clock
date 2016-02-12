var isHovering = false;

function displayTime() {
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

  // if (isHovering) {
  //   console.log('hovering');
  // }

    document.getElementById('clock').textContent = hours + ":" + minutes + ":" + seconds;
    var color = document.querySelector('#clock');

  if(isHovering){
    color.textContent = hours.toString(16) + ":" + minutes.toString(16) + ":" + seconds.toString(16);
  }


}


var clockCol = document.querySelector('#clock');
clockCol.addEventListener('mouseenter', trackMouseOn);
clockCol.addEventListener('mouseleave', trackMouseOff);



displayTime();
setInterval(displayTime, 1000);



function trackMouseOn() {
  console.log('backgroundColor');
  isHovering = true;
  var background = document.querySelector('#clock');
  background.style.backgroundColor = 'pink';
}

function trackMouseOff() {
  // console.log('mouseleave');
  isHovering = false;
  var background = document.querySelector('#clock');
  background.style.backgroundColor = 'grey';

}
